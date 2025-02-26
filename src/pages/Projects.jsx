import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProject } from '../hooks/useProject';
import Loading from '../components/Loading';
import Error from '../components/Error';
import SearchBar from '../components/projects/SearchBar';
import ViewToggle from '../components/projects/ViewToggle';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectPopup from '../components/projects/ProjectPopup';

const Projects = () => {
  const { projects, loading, error } = useProject();
  const [view, setView] = useState(() => localStorage.getItem('view') || 'list');
  const [sort, setSort] = useState(() => localStorage.getItem('sort') || 'id-asc');
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

  const handleSortChange = useCallback(
    (sortValue) => {
      if (sort !== sortValue) {
        setSort(sortValue);
        localStorage.setItem('sort', sortValue);
      }
    },
    [sort]
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

  // Filter and sort projects based on search and sort values
  const filteredProjects = useMemo(() => {
    const lowercasedSearch = search.toLowerCase();
    let filtered = projects.filter((project) => project.name.toLowerCase().includes(lowercasedSearch));

    switch (sort) {
      case 'id-asc':
        return filtered.sort((a, b) => a.id - b.id);
      case 'id-desc':
        return filtered.sort((a, b) => b.id - a.id);
      case 'name-asc':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered;
    }
  }, [projects, search, sort]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <>
      <title>Projects | Jason</title>
      <meta name="description" content="Hey, I'm Jason, a student at RIT. Check out these projects!" />

      {/* Search and View Controls */}
      <div className="flex gap-5 items-center mb-6">
        <SearchBar value={search} onChange={handleSearchChange} sortValue={sort} onSortChange={handleSortChange} />
        <ViewToggle view={view} setView={handleSetView} />
      </div>

      {/* Project Display */}
      <div className="max-h-[calc(100vh-280px)] overflow-y-auto scrollbar-hide">
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
              className="text-center text-gray-400"
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
