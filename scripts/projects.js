document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');

    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            data.reverse();

            data.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('card', 'mb-3', 'project-card');
                projectCard.style.width = '100%';

                projectCard.innerHTML = `
                    <div class="row g-1">
                        ${project.image ? `
                            <div class="col-md-4">
                                <img src="${project.image}" class="img-fluid rounded-start" alt="${project.title}">
                            </div>
                        ` : ''}
                        <div class="col-md-${project.image ? '8' : '12'}">
                            <div class="card-body">
                                <h6 class="card-title">${project.title}</h6>
                                <p class="card-text">${project.description}</p>
                                <a href="${project.link}" class="btn btn-primary btn-sm" target="_blank">Learn More</a>
                            </div>
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching project data:', error));
});