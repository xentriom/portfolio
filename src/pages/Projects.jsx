import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProject } from '../hooks/useProject';
import { List, LayoutGrid } from 'lucide-react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import SearchInput from '../components/SearchInput';
import ProjectCard from '../components/ProjectCard';
import ProjectPopup from '../components/ProjectPopup';
import MemoizedIcon from '../components/MemoizedIcon';

const Projects = () => {
  const { projects, loading, error } = useProject();
  const [view, setView] = useState(() => localStorage.getItem('view') || 'list');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleClosePopup = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Filter based on search, sort by project id
  const filteredProjects = useMemo(() => {
    const lowercasedSearch = search.toLowerCase();
    return projects
      .filter((project) => project.name.toLowerCase().includes(lowercasedSearch))
      .sort((a, b) => a.id - b.id);
  }, [projects, search]);

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
            className={`p-2 rounded-lg cursor-pointer ${view === 'list' ? 'bg-blue-400 text-white' : ''}`}
            aria-label="List View"
            onClick={() => handleSetView('list')}
          >
            <MemoizedIcon Icon={List} />
          </button>
          <button
            className={`p-2 rounded-lg cursor-pointer ${view === 'grid' ? 'bg-blue-400 text-white' : ''}`}
            aria-label="Grid View"
            onClick={() => handleSetView('grid')}
          >
            <MemoizedIcon Icon={LayoutGrid} />
          </button>
        </div>
      </div>

      {/* Project Display */}
      <div className="max-h-[calc(100vh-280px)] overflow-y-auto">
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className={view === 'list' ? 'space-y-6' : 'grid grid-cols-2 md:grid-cols-3 gap-6'}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ staggerChildren: 0.1, duration: 0.3 }}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleProjectClick(project)}
                  style={{ cursor: 'pointer' }}
                >
                  <ProjectCard project={project} view={view} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              className="text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              No projects found.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Project Popup */}
      {selectedProject && <ProjectPopup project={selectedProject} onClose={handleClosePopup} />}
    </>
  );
};

export default Projects;
