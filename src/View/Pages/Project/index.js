function createProjectIndex() {
    const containerDiv = document.createElement("div");

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = "Projects";
    containerDiv.appendChild(projectTitle);

    return containerDiv;
}

export default createProjectIndex;