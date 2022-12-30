import dynamic from 'next/dynamic';

const RemoteNextIndexPage = dynamic(() => import('remoteNext/pages/index'), {
  ssr: false,
  loading: () => <p>Loading remoteNext/pages/index...</p>,
});

export default function RemoteNextPage() {
  return <RemoteNextIndexPage />;
}
