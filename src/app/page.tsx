import StatusLabel, { Status } from './components/status-label';
export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active Label</StatusLabel>
      <StatusLabel status={Status.NotActive}>Active Label</StatusLabel>
      <StatusLabel status={Status.Pending}>Active Label</StatusLabel>
      <StatusLabel status={Status.Suspendet}>Active Label</StatusLabel>
    </main>
  );
}
