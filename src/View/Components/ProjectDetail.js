function createProjectDetail(project = {}) {
  const container = document.createElement("div");
  container.classList.add("project-detail");

  const title = document.createElement("h3");
  title.textContent = "Project Detail";
  container.appendChild(title);

  const projectTitle = document.createElement("p");
  projectTitle.textContent = `Name: ${(  project.name ?? '')}`;
  
  const dueDate = document.createElement("p");
  dueDate.textContent = `Due Date: ${(  project.dueDate ?? '')}`
  container.appendChild(projectTitle);
  container.appendChild(dueDate);

  return container;
}
export default createProjectDetail;