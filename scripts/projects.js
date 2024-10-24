
document.addEventListener('DOMContentLoaded', async function () {
    renderProjects();
});

/**
 * Render the projects fetched from the JSON file
 */
const renderProjects = async () => {
    const projectsContainer = document.querySelector('#projects-container');
    const projects = await fetchProjects();

    if (!projects || projects.length === 0) {
        projectsContainer.innerHTML = '<p>No projects fetched.</p>';
        return;
    }

    projects.reverse();

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card', 'mb-3', 'project-card');
        projectCard.style.width = '100%';

        projectCard.innerHTML = createProjectContainer(project);

        projectsContainer.appendChild(projectCard);
    });
};

/**
 * Fetch project data from the JSON file
 * @returns {Array} The fetched projects
 */
const fetchProjects = async () => {
    try {
        const response = await fetch('data/projects.json');
        return await response.json();
    }
    catch (error) {
        console.error('Error fetching project data:', error);
        return [];
    }
};

/**
 * Create a project container HTML
 * @param {Object} project - The project object
 * @returns {string} The project container HTML
 */
const createProjectContainer = (project) => {
    return `
        <div class="row g-1">
            ${project.image ? `
                <div class="col-md-4 d-flex flex-column align-items-center">
                    <img src="${project.image}" class="img-fluid rounded-start" alt="${project.title} logo">
                    <a href="${project.link}" class="btn btn-primary btn-sm" target="_blank">Visit GitHub</a>
                </div>
            ` : ''}
            <div class="col-md-${project.image ? '8' : '12'}">
                <div class="card-body">
                    <h6 class="card-title">${project.title}</h6>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join('')}
                    </div>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        </div>
    `;
};