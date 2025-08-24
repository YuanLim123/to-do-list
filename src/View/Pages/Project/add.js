import createProjectForm from "../../Components/ProjectForm.js";
import createTaskForm from "../../Components/TaskForm.js";

function createProjectAdd() {
  const projectAddDiv = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = "Add Project";

  projectAddDiv.appendChild(title);
  projectAddDiv.classList.add("project-add-container");


  const taskAddDiv = document.createElement("div");
  const addTaskText = document.createElement("h3");
  addTaskText.textContent = "Add Task";
  taskAddDiv.classList.add("task-add-container");
  taskAddDiv.appendChild(addTaskText);
  taskAddDiv.appendChild(createTaskForm());

  projectAddDiv.appendChild(createProjectForm());
  projectAddDiv.appendChild(taskAddDiv);

  return projectAddDiv;
}
export default createProjectAdd;
