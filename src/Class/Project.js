class Project {
    constructor(name, dueDate) {
        this._tasks = [];
        this._name = name;
    }

    get name() {
        return this._name;
    }

    add(task) {
        this._tasks.push(task);
    }

    getTask(index) {
        return this._tasks[index];
    }

    getAllTasks() {
        return this._tasks;
    }

    count() {
        return this._tasks.length;
    }

    deleteAll() {
        this._tasks = [];
    }

    deleteTask(index) {
        this._tasks.splice(index, 1);
    }

    first() {
        return this._tasks[0];
    }

    last() {
        return this._tasks[this._tasks.length - 1];
    }

}


export default Project;