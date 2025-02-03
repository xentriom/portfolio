import { useState, useCallback, useMemo, useRef } from 'react';
import { useProject } from '../hooks/useProject';
import { List, LayoutGrid } from 'lucide-react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import SearchInput from '../components/SearchInput';
import ProjectCard from '../components/ProjectCard';
import MemoizedIcon from '../components/MemoizedIcon';

const Projects = () => {
  const { projects, loading, error } = useProject();
  const localStorageRef = useRef(localStorage.getItem('view') || 'list');
  const [view, setView] = useState(localStorageRef.current);
  const [search, setSearch] = useState('');

  const handleSetView = useCallback(
    (newView) => {
      if (view !== newView) {
        setView(newView);
        localStorage.setItem('view', newView);
      }
    },
    [view]
  );

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredProjects = useMemo(() => {
    const lowercasedSearch = search.toLowerCase();
    return projects.filter((project) => project.name.toLowerCase().includes(lowercasedSearch));
  }, [projects, search]);

  const projectList = useMemo(() => {
    return filteredProjects.map((project) => <ProjectCard key={project.id} project={project} view={view} />);
  }, [filteredProjects, view]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <>
      <title>Projects | Jason</title>

      {/* Search and View Controls */}
      <div className="flex justify-between items-center mb-6">
        <SearchInput value={search} onChange={handleSearchChange} />
        <div className="flex gap-2">
          <button
            className={`p-2 rounded-lg ${view === 'list' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handleSetView('list')}
          >
            <MemoizedIcon Icon={List} />
          </button>
          <button
            className={`p-2 rounded-lg ${view === 'grid' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handleSetView('grid')}
          >
            <MemoizedIcon Icon={LayoutGrid} />
          </button>
        </div>
      </div>

      {/* Project Display */}
      <div className="max-h-[calc(100vh-350px)] overflow-auto">
        {filteredProjects.length > 0 ? (
          <div className={view === 'list' ? 'space-y-6' : 'grid grid-cols-2 md:grid-cols-3 gap-6'}>{projectList}</div>
        ) : (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>
    </>
  );
};

export default Projects;
