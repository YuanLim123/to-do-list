function createDueDateComponent(dueDate) {
    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("due-date-container");

    const dueDateLabel = document.createElement("p");
    dueDateLabel.textContent = "Due Date:";
    dueDateLabel.classList.add("due-date-label");
    dueDateDiv.appendChild(dueDateLabel);

    const dueDateText = document.createElement("p");
    dueDateText.textContent = dueDate ?? "";
    dueDateText.classList.add("due-date-content");
    dueDateDiv.appendChild(dueDateText);

    return dueDateDiv;
}
export default createDueDateComponent;