import createProjectForm from "../../Components/ProjectForm.js";
import createTaskForm from "../../Components/TaskForm.js";
import createShowTaskList from "../../Components/ShowTaskList.js";
import createProjectDetail from "../../Components/ProjectDetail.js";

function createProjectAdd() {
  const projectAddDiv = document.createElement("div");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Add Project";

  projectAddDiv.appendChild(title);
  projectAddDiv.classList.add("project-add-container");

  const taskAddDiv = document.createElement("div");
  const addTaskText = document.createElement("h3");
  addTaskText.textContent = "Add Task";
  taskAddDiv.classList.add("task-add-container");
  taskAddDiv.appendChild(addTaskText);
  taskAddDiv.appendChild(createTaskForm());

  const showTasListDiv = document.createElement("div");
  const showTaskListText = document.createElement("h3");
  showTaskListText.textContent = "Task List";
  showTasListDiv.classList.add("show-task-list-container");
  showTasListDiv.appendChild(showTaskListText);
  showTasListDiv.appendChild(createShowTaskList());

  projectAddDiv.appendChild(createProjectForm());
  projectAddDiv.appendChild(taskAddDiv);
  projectAddDiv.appendChild(showTasListDiv);
  projectAddDiv.appendChild(createProjectDetail());

  return projectAddDiv;
}
export default createProjectAdd;
