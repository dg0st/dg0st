const allProjects = [/* Массив всех проектов */];
let visibleCount = 4;
const increment = 4;

const container = document.getElementById('projects-container');
const loadMoreBtn = document.getElementById('load-more-btn');

function renderProjects() {
  container.innerHTML = '';
  for (let i = 0; i < visibleCount && i < allProjects.length; i++) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${allProjects[i].title}</h3>
      <p>${allProjects[i].description}</p>
    `;
    container.appendChild(card);
  }

  if (visibleCount >= allProjects.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMoreBtn.addEventListener('click', () => {
  visibleCount += increment;
  renderProjects();
});

renderProjects();
