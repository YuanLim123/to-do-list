import createTaskForm from "../../Components/TaskForm";

function createTaskEdit(task) {

    const container = document.createElement("div");
    container.classList.add("task-show-container");

    const title = document.createElement("h2");
    title.textContent = `Edit Task: ${task.title ?? ""}`;
    container.appendChild(title);

    const editForm = createTaskForm(task, true);
    editForm.dataset.taskId = task.id;

    container.appendChild(editForm);

    return container;

}

export default createTaskEdit;