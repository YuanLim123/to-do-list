import createDescriptionComponent from "./Content/description";
import createDueDateComponent from "./Content/dueDate";
import createStatusComponent from "./Content/status";
import createNotesComponent from "./Content/notes";
import createTitleComponent from "./Content/title";

function createTaskShow(task) {
    const container = document.createElement("div");
    container.classList.add("task-show-container");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("task-show-header");

    const title = createTitleComponent(task.title);
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-task-button");

    editBtn.textContent = "Edit";

    headerDiv.appendChild(title);
    headerDiv.appendChild(editBtn);

    container.appendChild(headerDiv);
    container.appendChild(createDescriptionComponent(task.description));
    container.appendChild(createDueDateComponent(task.dueDate));
    container.appendChild(createStatusComponent(task.status));
    container.appendChild(createNotesComponent(task.notes));


    return container;
}
export default createTaskShow;