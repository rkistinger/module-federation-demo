export function FederatedModuleErrorFallback() {
  return (
    <div>
      <p>Uh oh, loading the federated module failed...</p>
      <p>But dont worry, I am a safe fallback so your app still works</p>
    </div>
  );
}
