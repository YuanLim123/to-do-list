class Project {
    constructor() {
        this._tasks = [];
    }

    add(task) {
        this._tasks.push(task);
    }

    get(index) {
        return this._tasks[index];
    }

    getAll() {
        return this._tasks;
    }

    count() {
        return this._tasks.length;
    }

    deleteAll() {
        this._tasks = [];
    }

    delete(index) {
        this.tasks.splice(index, 1);
    }

    first() {
        return this._tasks[0];
    }

    last() {
        return this._tasks[this._tasks.length - 1];
    }

}


export default Project;