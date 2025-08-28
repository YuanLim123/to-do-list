function createStatusComponent(status) {
    const statusDiv = document.createElement("div");
    statusDiv.classList.add("status-container");

    const statusLabel = document.createElement("p");
    statusLabel.textContent = "Status:";
    statusLabel.classList.add("status-label");
    statusDiv.appendChild(statusLabel);

    const statusText = document.createElement("p");
    statusText.textContent = status ?? "";
    statusText.classList.add("status-content");
    statusDiv.appendChild(statusText);

    return statusDiv;
}
export default createStatusComponent;