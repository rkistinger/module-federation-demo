import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { Props as ButtonProps } from '../@mf-types/remoteNext/_types/components/Button';

const RemoteNextButton = dynamic<ButtonProps>(
  () => import('remoteNext/Button').then((module) => module.Button),
  {
    ssr: false,
    loading: () => <p>Loading remoteNext/Button...</p>,
  }
);

export default function IndexPage() {
  const router = useRouter();

  return (
    <>
      <h1>Hello from the host index page!</h1>
      <RemoteNextButton
        onClick={() => {
          router.push('/remote-next');
        }}
      >
        I&apos;m a button component exposed from a remote module - click to view
        an entire page exposed from a remote module
      </RemoteNextButton>
    </>
  );
}
