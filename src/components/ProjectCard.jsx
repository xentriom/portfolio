import PropTypes from 'prop-types';

const ProjectCard = ({ project, view }) => {
  return (
    <div
      className={`transition-transform duration-300 hover:scale-105 hover:rotate-1 rounded-lg shadow-lg bg-yellow-400 ${
        view === 'list' ? 'flex items-center gap-4' : 'text-center'
      }`}
    >
      <img
        src={project.image || '/placeholder.jpg'}
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
};

export default ProjectCard;
