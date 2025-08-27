function createTaskListItem(task = {}, idx) {
    const item = document.createElement("li");
    item.classList.add("task-list-item");

    const title = document.createElement("a");
    title.id = "task-title-link";
    title.href = "#";
    title.textContent = task.title;
    title.dataset.index = idx;

    const dueDate = document.createElement("span");
    dueDate.classList.add("task-due-date");
    dueDate.textContent = `Due: ${task.dueDate}`;

    item.appendChild(title);
    item.appendChild(dueDate);

    return item;

}

export default createTaskListItem;