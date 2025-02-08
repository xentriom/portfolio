import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import PropTypes from 'prop-types';

// ProjectPopup component to display project details
// Shown when a project card is clicked
// Displays project in greater details
const ProjectPopup = ({ project, onClose }) => {
  useEffect(() => {
    // esc key to close popup
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // click outside to close popup
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 bg-opacity-20 backdrop-blur-[2px] flex justify-center items-center z-50"
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          key="popup"
          className="bg-gray-800/95 backdrop-blur-lg rounded-lg shadow-xl border-gray-800 relative max-w-lg w-full max-h overflow-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div
            className="relative h-24 rounded-t-lg"
            style={{
              backgroundImage: `url(${project.images?.bg || './banner.jpeg'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <motion.button
              className="absolute top-2 right-2 text-gray-200 bg-gray-800/95 backdrop-blur-lg p-1 rounded-full shadow-md"
              aria-label="Close Popup"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>
          </div>

          {/* Content section */}
          <div className="p-4">
            <div className="relative -mt-12.5 mb-4">
              <div className="flex flex-row items-center">
                {/* Project Icon */}
                <motion.img
                  src={project.images?.icon || './icon.jpeg'}
                  alt={project.name}
                  className="w-18 h-18 rounded-md shadow-md mr-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                />

                {/* Project Name and Tags */}
                <div className="flex flex-col">
                  <motion.h2
                    className="text-xl font-semibold mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    {project.name}
                  </motion.h2>
                  {project.tags?.length > 0 && (
                    <motion.div
                      className="flex flex-wrap gap-2 mt-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      {project.tags.map((tag) => (
                        <span key={tag} className="p-1 px-2 bg-indigo-400 text-gray-200 rounded-lg text-xs">
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <motion.p
              className="text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {project.description?.long || project.description?.short || 'No description provided.'}
            </motion.p>

            {/* Project Links */}
            {project.links?.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2 mt-4 justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 px-2 bg-indigo-400 rounded-lg shadow-md text-sm text-gray-200 hover:bg-indigo-500"
                  >
                    {link.type}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

ProjectPopup.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectPopup;
