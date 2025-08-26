import createSideBar from "./View/Components/SideBar.js";
import createMainContainer from "./View/Components/MainContainer.js";
import createProjectIndex from "./View/Pages/Project/index.js";
import createProjectAdd from "./View/Pages/Project/add.js";
import createHomeIndex from "./View/Pages/Home/index.js";
import createProjectDetail from "./View/Components/ProjectDetail.js";
import Task from "./Class/Task.js";
import Project from "./Class/Project.js";
import Priority from "./Enum/Priority.js";

class ScreenController {
  constructor() {
    this.contentDiv = document.getElementById("content");
    this.currentProject = null;
  }

  renderProjectIndex() {
    this.contentDiv.innerHTML = "";
    this.contentDiv.appendChild(createSideBar());
    const main = createMainContainer();
    main.appendChild(createProjectIndex());
    this.contentDiv.appendChild(main);
    this.attachListeners();
  }

  renderHome() {
    this.contentDiv.innerHTML = "";
    this.contentDiv.appendChild(createSideBar());
    const main = createMainContainer();
    main.appendChild(createHomeIndex());
    this.contentDiv.appendChild(main);
    this.attachListeners();
  }

  renderProjectAdd() {
    this.contentDiv.innerHTML = "";
    this.contentDiv.appendChild(createSideBar());
    const main = createMainContainer();
    const projectAddContainer = createProjectAdd();
    main.appendChild(projectAddContainer);
    this.contentDiv.appendChild(main);
    this.attachListeners();
  }

  updateProjectDetailDiv() {
    if (!this.currentProject) return;
    const projectAddContainer = document.querySelector(
      ".project-add-container"
    );
    const projectDetailDiv = document.querySelector(".project-detail");
    if (!projectDetailDiv || !projectAddContainer) return;
    projectAddContainer.removeChild(projectDetailDiv);
    projectAddContainer.appendChild(createProjectDetail(this.currentProject));
  }

  updateTaskList() {
    const taskListUl = document.querySelector(".task-list");    
    if (!taskListUl || !this.currentProject) return;

    taskListUl.innerHTML = "";
    this.currentProject.getAllTasks().forEach((task) => {
      const listItem = document.createElement("li");
      listItem.textContent = task.title;
      taskListUl.appendChild(listItem);
    });
  }

  projectSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const dueDate = document.getElementById("dueDate").value;
    const newProject = new Project(title, dueDate);
    this.currentProject = newProject;
    this.updateProjectDetailDiv();
    e.target.reset();
  }

  taskSubmit(e) {
    e.preventDefault();
    if (!this.currentProject) {
      alert("Please create a project first.");
      e.target.reset();
      return;
    }

    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const dueDate = document.getElementById("task-dueDate").value;
    const notes = document.getElementById("task-notes").value;
    const priority = Priority.LOW;

    this.currentProject.add(new Task(title, description, dueDate, dueDate, priority, notes));

    this.updateTaskList();
    e.target.reset();
  }

  attachListeners() {
    const homeButton = document.getElementById("homeBtn");
    const projectsButton = document.getElementById("projectsBtn");
    const projectsAddButton = document.getElementById("addProjectBtn");
    const projectAddForm = document.getElementById("projectAddForm");
    const taskAddForm = document.getElementById("taskAddForm");

    if (homeButton) homeButton.onclick = () => this.renderHome();
    if (projectsButton)
      projectsButton.onclick = () => this.renderProjectIndex();
    if (projectsAddButton)
      projectsAddButton.onclick = () => this.renderProjectAdd();
    if (taskAddForm) taskAddForm.onsubmit = (e) => this.taskSubmit(e);
    if (projectAddForm) projectAddForm.onsubmit = (e) => this.projectSubmit(e);
  }
}

export default ScreenController;

