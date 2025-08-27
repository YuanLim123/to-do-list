function createProjectDetail(project = {}) {
  const container = document.createElement("div");
  container.classList.add("project-detail");

  const title = document.createElement("h3");
  title.textContent = "Project Detail";
  container.appendChild(title);

  const projectTitle = document.createElement("p");
  projectTitle.textContent = `Name: ${(  project.name ?? '')}`;
  
  container.appendChild(projectTitle);

  return container;
}
export default createProjectDetail;