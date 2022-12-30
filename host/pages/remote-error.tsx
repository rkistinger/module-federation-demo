import { FederationBoundary } from '@module-federation/utilities/src/utils/react';

export default function RemoteErrorPage() {
  return (
    <FederationBoundary
      dynamicImporter={() => Promise.reject('Fail loading remote module')}
      fallback={() =>
        import('../components/FederatedModuleErrorFallback').then(
          ({ FederatedModuleErrorFallback }) => FederatedModuleErrorFallback
        )
      }
      // @ts-expect-error: bug in prop typing
      customBoundary={undefined}
    />
  );
}
