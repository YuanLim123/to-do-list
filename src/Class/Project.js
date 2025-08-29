class Project {
    constructor(name, id = crypto.randomUUID()) {
        this._id = id;
        this._tasks = [];
        this._name = name;
    }

    get id() {
        return this._id;
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

    findTaskById(id) {
        return this._tasks.find(task => task.id === id);
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

    deleteTaskById(id) {
        this._tasks = this._tasks.filter(task => task.id !== id);
    }

    first() {
        return this._tasks[0];
    }

    last() {
        return this._tasks[this._tasks.length - 1];
    }

}


export default Project;