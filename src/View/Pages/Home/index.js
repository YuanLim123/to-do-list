function createHomeIndex() {
    const containerDiv = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = "Welcome User";
    containerDiv.appendChild(title);

    return containerDiv;
}

export default createHomeIndex;