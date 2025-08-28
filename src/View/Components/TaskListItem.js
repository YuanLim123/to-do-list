function createTaskListItem(task = {}) {
    const item = document.createElement("li");
    item.classList.add("task-list-item");

    const title = document.createElement("a");
    title.id = "task-title-link";
    title.href = "#";
    title.textContent = task.title;
    title.dataset.taskId = task.id;
    
    const dueDate = document.createElement("span");
    dueDate.classList.add("task-due-date");
    dueDate.textContent = `Due: ${task.dueDate}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "task-delete-button";
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.taskId = task.id;

    item.appendChild(title);
    item.appendChild(dueDate);
    item.appendChild(deleteBtn);

    return item;

}

export default createTaskListItem;