// src/index.js
import "./styles.css";
import createSideBar from "./View/Components/SideBar.js";
import createMainContainer from "./View/Components/MainContainer.js";
import createProjectIndex from "./View/Pages/Project/index.js";
import createProjectAdd from "./View/Pages/Project/add.js";
import createHomeIndex from "./View/Pages/Home/index.js";
import ScreenController from "./controller.js";

const screenController = new ScreenController();
screenController.renderHome();