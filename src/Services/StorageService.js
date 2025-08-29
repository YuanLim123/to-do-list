import Project from "../Class/Project";
import Task from "../Class/Task";

class StorageService {

  loadProjects() {
    const projects = JSON.parse(localStorage.getItem("projects"));
    if (!projects) return null;
    const result = projects.map((projData) => {
      const project = new Project(projData._name, projData._id);
      this.loadTasks(project, projData._tasks);
      return project;
    });

    return result;
  }

  loadTasks(project, tasks) {
    if (!project || !tasks) return;
    tasks.forEach((taskData) => {
      const task = new Task(
        taskData._title,
        taskData._description,
        taskData._dueDate,
        taskData._priority,
        taskData._notes,
        taskData._status,
        taskData._id
      );
      project.add(task);
    });
  }

  saveProjects(projects) {
    if (!projects) return;
    localStorage.setItem("projects", JSON.stringify(projects));
  }

}

export default StorageService;
