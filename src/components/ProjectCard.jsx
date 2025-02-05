import PropTypes from 'prop-types';

// ProjectCard component to display project cards
// Used in Projects page to display projects
// Formats depending on view (list or grid)
const ProjectCard = ({ project, view, onClick }) => {
  return (
    <div
      className={`transition-transform duration-300 hover:scale-103 rounded-lg shadow-lg backdrop-blur-xs border-1 border-blue-400 cursor-pointer ${
        view === 'list' ? 'flex items-center gap-4' : 'text-center'
      }`}
      onClick={onClick}
    >
      <img
        src={project.image || './icon.jpeg'}
        alt={project.name}
        className={`rounded-lg object-cover ${view === 'list' ? 'w-24 h-24' : 'w-full h-40'}`}
        loading="lazy"
      />
      <div className={view === 'list' ? 'flex-1' : ''}>
        <h2 className="text-lg font-semibold">{project.name}</h2>
        {view === 'list' && <p className="text-gray-500">{project.description?.short || 'No description found.'}</p>}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  view: PropTypes.oneOf(['list', 'grid']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
