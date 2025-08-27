import createSideBar from "./View/Components/SideBar.js";
import createMainContainer from "./View/Components/MainContainer.js";
import createProjectIndex from "./View/Pages/Project/index.js";
import createProjectAdd from "./View/Pages/Project/add.js";
import createHomeIndex from "./View/Pages/Home/index.js";
import createProjectDetail from "./View/Components/ProjectDetail.js";
import createProjectTable from "./View/Components/ProjectTable.js";
import createShowProject from "./View/Pages/Project/show.js";
import Task from "./Class/Task.js";
import Project from "./Class/Project.js";
import Priority from "./Enum/Priority.js";

class ScreenController {
  constructor() {
    this.contentDiv = document.getElementById("content");
    this.currentProject = null;
    this.projects = [];
  }

  renderPage(page = createHomeIndex()) {
    if (page == null) return;
    this.contentDiv.innerHTML = "";
    this.contentDiv.appendChild(createSideBar());
    const main = createMainContainer();
    main.appendChild(page);
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

  updateTaskListUl() {
    const taskListUl = document.querySelector(".task-list");
    if (!taskListUl || !this.currentProject) return;
    taskListUl.innerHTML = "";
    this.currentProject.getAllTasks().forEach((task) => {
      const listItem = document.createElement("li");
      listItem.textContent = task.title;
      taskListUl.appendChild(listItem);
    });
  }

  updateProjectListUl() {
    const projectListUl = document.querySelector(".project-list");
    if (!projectListUl) return;
    projectListUl.innerHTML = "";
    this.projects.forEach((project) => {
      const listItem = document.createElement("li");
      listItem.textContent = project.name;
      projectListUl.appendChild(listItem);
    });
  }

  updateProjectTable() {
    const projectTbl = document.getElementById("projectTable");
    const projectTableDiv = document.querySelector(
      ".project-table-container"
    );

    if (!projectTbl || !projectTableDiv) return;
    projectTableDiv.removeChild(projectTbl);

    projectTableDiv.appendChild(createProjectTable(this.projects, undefined));
  }

  projectSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const newProject = new Project(title);
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

    this.currentProject.add(
      new Task(title, description, dueDate, dueDate, priority, notes)
    );

    this.updateTaskListUl();
    e.target.reset();
  }

  saveProject() {
    if (!this.currentProject) {
      alert("No project to save.");
      return;
    }

    this.projects.push(this.currentProject);
    this.currentProject = null;
    this.renderPage(createProjectIndex());
    this.updateProjectTable();
    this.attachListeners();

  }

  viewProject(e) {
    const index = e.target.dataset.index;
    if (index === undefined || index < 0 || index >= this.projects.length)
      return;
    const project = this.projects[index];
    this.renderPage(createShowProject(project));
  }

  viewTask(e) {
    e.preventDefault();
    alert("Task details feature coming soon!");
  }

  attachListeners() {
    const homeButton = document.getElementById("homeBtn");
    const projectsButton = document.getElementById("projectsBtn");
    const projectsAddButton = document.getElementById("addProjectBtn");
    const projectAddForm = document.getElementById("projectAddForm");
    const taskAddForm = document.getElementById("taskAddForm");
    const saveButton = document.querySelector(".save-project-button");
    const viewProjectButtons = document.querySelectorAll(".view-project-button");
    const taskTittleLink = document.getElementById("task-title-link");
    const backButton = document.querySelector(".back-button");

    if (homeButton)
      homeButton.onclick = () => this.renderPage(createHomeIndex());
    if (projectsButton)
      projectsButton.onclick = () => this.renderPage(createProjectIndex(this.projects));
    if (projectsAddButton)
      projectsAddButton.onclick = () => this.renderPage(createProjectAdd());
    if (taskAddForm) taskAddForm.onsubmit = (e) => this.taskSubmit(e);
    if (projectAddForm) projectAddForm.onsubmit = (e) => this.projectSubmit(e);
    if (saveButton) saveButton.onclick = () => this.saveProject();
    if (taskTittleLink) taskTittleLink.onclick = (e) => this.viewTask(e);
    if (backButton) backButton.onclick = () => this.renderPage(createProjectIndex(this.projects));

    viewProjectButtons.forEach((button) => {
      button.onclick = (e) => this.viewProject(e);
    });


  }
}

export default ScreenController;
