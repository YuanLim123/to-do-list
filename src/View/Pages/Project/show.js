import createShowTaskList from "../../Components/ShowTaskList";
import createTaskListItem from "../../Components/TaskListItem";

function createProjectShow(project = {}) {
    const container = document.createElement("div");
    container.classList.add("project-show-container");

    const title = document.createElement("h2");
    title.textContent = `Project: ${project.name ?? ""}`;
    title.classList.add("title");
    container.appendChild(title);

    const taskListDiv = document.createElement("div");
    taskListDiv.classList.add("project-task-list");
    const taskListTitle = document.createElement("h4");
    taskListTitle.textContent = "Tasks:";
    taskListDiv.appendChild(taskListTitle);

    if (project.getAllTasks() && project.getAllTasks().length > 0) {
        const taskList = createShowTaskList();
        project.getAllTasks().forEach((task, idx) => {
            const taskItem = createTaskListItem(task);
            taskList.appendChild(taskItem);
        });
        taskListDiv.appendChild(taskList);
    }

    const backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.classList.add("back-button");

    container.appendChild(taskListDiv);
    container.appendChild(backButton);

    return container;
}

export default createProjectShow;