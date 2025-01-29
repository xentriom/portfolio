import Loading from '../components/Loading';
import Error from '../components/Error';
import { useProject } from '../hooks/useProject';

const Projects = () => {
  const { projects, loading, error } = useProject();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <title>Projects | Jason</title>
      <main className=" w-full max-w-2xl mt-4 mb-4">
        <p>Projects in database: {projects.length}</p>
      </main>
    </>
  );
};

export default Projects;
