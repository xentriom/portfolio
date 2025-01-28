import { useTitle } from '../hooks/useTitle';

const Home = () => {
  useTitle();
  return (
    <main className=" w-full max-w-2xl mt-4 mb-4">
      <p>Home content.</p>
    </main>
  );
};

export default Home;
