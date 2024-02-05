import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-button';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page { new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active Label</StatusLabel>
      <StatusLabel status={Status.NotActive}>Active Label</StatusLabel>
      <StatusLabel status={Status.Pending}>Active Label</StatusLabel>
      <StatusLabel status={Status.Suspended}>Active Label</StatusLabel>
      <AddCompanyButton />
      <MagicButton/>
    </main>
  );
}
