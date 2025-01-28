import { useTitle } from '../hooks/useTitle';

const Projects = () => {
  useTitle('Projects');
  return (
    <main className=" w-full max-w-2xl mt-4 mb-4">
      <p>Project content.</p>
    </main>
  );
};

export default Projects;
