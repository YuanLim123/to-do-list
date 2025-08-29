import createSideBar from "./View/Components/SideBar.js";
import createMainContainer from "./View/Components/MainContainer.js";
import createProjectIndex from "./View/Pages/Project/index.js";
import createProjectAdd from "./View/Pages/Project/add.js";
import createHomeIndex from "./View/Pages/Home/index.js";
import createProjectDetail from "./View/Components/ProjectDetail.js";
import createProjectTable from "./View/Components/ProjectTable.js";
import createShowProject from "./View/Pages/Project/show.js";
import createTaskShow from "./View/Pages/Task/show.js";
import createTaskEdit from "./View/Pages/Task/edit.js";
import Task from "./Class/Task.js";
import Project from "./Class/Project.js";
import Priority from "./Enum/Priority.js";
import StorageService from "./Services/StorageService.js";

class ScreenController {
  constructor() {
    this.contentDiv = document.getElementById("content");
    this.currentProject = null;
    this.storageService = new StorageService();
    this.projects = this.storageService.loadProjects() ?? [];
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
    const projectTableDiv = document.querySelector(".project-table-container");

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
    this.storageService.saveProjects(this.projects);
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
    this.currentProject = project;
    this.renderPage(createShowProject(project));
  }

  deleteProject(e) {
    if (!confirm("Are you sure to delete this project?")) return;
    const index = e.target.dataset.index;
    if (index === undefined || index < 0 || index >= this.projects.length) return;

    this.projects.splice(index, 1);
    alert("Project deleted successfully.");
    this.updateProjectTable();
  }

  viewTask(e) {
    e.preventDefault();
    const id = e.target.dataset.taskId;
    const task = this.currentProject.findTaskById(id);
    if (!task) return;
    this.renderPage(createTaskShow(task));

  }

  deleteTask(e) {
    e.preventDefault();
    if (!confirm("Are you sure to delete this task?")) return;
    const id = e.target.dataset.taskId;
    const task = this.currentProject.findTaskById(id);
    if (!task) return;

    this.currentProject.deleteTaskById(id);
    saveProjectsToLocal(this.projects);
    alert("Task deleted successfully.");
    this.renderPage(createShowProject(this.currentProject));
    // implement local storage update
  }

  editTask(e) {
    const id = e.target.dataset.taskId;
    const task = this.currentProject.findTaskById(id);
    if (!task) return;
    this.renderPage(createTaskEdit(task));
  }

  updateTask(e) {
    e.preventDefault();
    try {
      const taskId = e.target.dataset.taskId;
      const task = this.currentProject.findTaskById(taskId);

      const title = document.getElementById("task-title").value;
      const description = document.getElementById("task-description").value;
      const dueDate = document.getElementById("task-dueDate").value;
      const notes = document.getElementById("task-notes").value;
      const priority = Priority.LOW;

      task.update({ title, description, dueDate, notes, priority });
      saveProjectsToLocal(this.projects);
      alert("Task updated successfully.");
      this.renderPage(createTaskShow(task));
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Failed to update task. Please try again.");
    } finally {
      e.target.reset();
    }
  }

  attachListeners() {
    const homeButton = document.getElementById("homeBtn");
    const projectsButton = document.getElementById("projectsBtn");
    const projectsAddButton = document.getElementById("addProjectBtn");
    const projectAddForm = document.getElementById("projectAddForm");
    const taskAddForm = document.getElementById("taskAddForm");
    const saveButton = document.querySelector(".save-project-button");
    const viewProjectButtons = document.querySelectorAll(
      ".view-project-button"
    );
    const deleteProjectButtons = document.querySelectorAll(
      ".delete-project-button"
    );
    const taskTittleLinks = document.querySelectorAll("#task-title-link");
    const backButton = document.querySelector(".back-button");
    const taskDeleteButtons = document.querySelectorAll("#task-delete-button");
    const taskEditButton = document.querySelector(".edit-task-button");
    const taskEditForm = document.getElementById("taskEditForm");

    if (homeButton)
      homeButton.onclick = () => this.renderPage(createHomeIndex());
    if (projectsButton)
      projectsButton.onclick = () =>
        this.renderPage(createProjectIndex(this.projects));
    if (projectsAddButton)
      projectsAddButton.onclick = () => this.renderPage(createProjectAdd());
    if (taskAddForm) taskAddForm.onsubmit = (e) => this.taskSubmit(e);
    if (projectAddForm) projectAddForm.onsubmit = (e) => this.projectSubmit(e);
    if (saveButton) saveButton.onclick = () => this.saveProject();
    if (backButton)
      backButton.onclick = () =>
        this.renderPage(createProjectIndex(this.projects));
    if (taskEditButton) taskEditButton.onclick = (e) => this.editTask(e);
    if (taskEditForm) taskEditForm.onsubmit = (e) => this.updateTask(e);

    viewProjectButtons.forEach((button) => {
      button.onclick = (e) => this.viewProject(e);
    });

    taskTittleLinks.forEach((link) => {
      link.onclick = (e) => this.viewTask(e);
    });

    taskDeleteButtons.forEach((button) => {
      button.onclick = (e) => this.deleteTask(e);
    });

    deleteProjectButtons.forEach((button) => {
      button.onclick = (e) => this.deleteProject(e);
    });
  }
}

export default ScreenController;
