// src/index.js
import "./styles.css";
import createSideBar from "./View/Components/SideBar.js";
import createMainContainer from "./View/Components/MainContainer.js";
import createProjectIndex from "./View/Pages/Project/index.js";
import createProjectAdd from "./View/Pages/Project/add.js";
import createHomeIndex from "./View/Pages/Home/index.js";

const contentDiv = document.getElementById("content");

function renderProjectIndex() {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createSideBar());
  const main = createMainContainer();
  main.appendChild(createProjectIndex());
  contentDiv.appendChild(main);
  attachSidebarListeners();
}

function renderProjectAdd() {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createSideBar());
  const main = createMainContainer();
  main.appendChild(createProjectAdd());
  contentDiv.appendChild(main);
  attachSidebarListeners();
}

function renderHome() {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createSideBar());
  const main = createMainContainer();
  main.appendChild(createHomeIndex());
  contentDiv.appendChild(main);
  attachSidebarListeners();
}

function attachSidebarListeners() {
  const homeButton = document.getElementById("homeBtn");
  const projectsButton = document.getElementById("projectsBtn");
  const addProjectButton = document.getElementById("addProjectBtn");

  if (homeButton) homeButton.onclick = renderHome;
  if (projectsButton) projectsButton.onclick = renderProjectIndex;
  if (addProjectButton) addProjectButton.onclick = renderProjectAdd;
}

// Initial render
renderHome();