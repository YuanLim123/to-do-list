import createProjectTable from "../../Components/ProjectTable";

function createProjectIndex(projects = []) {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("project-index-container");

    const title = document.createElement("h2");
    title.textContent = "Projects";
    title.classList.add("title");
    containerDiv.appendChild(title);

    const projectTableDiv = document.createElement("div");
    projectTableDiv.classList.add("project-table-container");
    projectTableDiv.appendChild(createProjectTable(projects));

    containerDiv.appendChild(projectTableDiv);
    return containerDiv;
}

export default createProjectIndex;