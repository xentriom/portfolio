import { useTitle } from '../hooks/useTitle';

const Contacts = () => {
  useTitle('Contact');
  return (
    <main className=" w-full max-w-2xl mt-4 mb-4">
      <p>Contact content.</p>
    </main>
  );
};

export default Contacts;
