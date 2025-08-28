import Status  from "../Enum/Status.js";

class Task {
    constructor(title, description, dueDate, priority, notes, status = Status.INCOMPLETE) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._status = status;
    }

    get title() {
        return this._title;
    }

    get dueDate() {
        return this._dueDate;
    }

    get description() {
        return this._description;
    }

    get notes() {
        return this._notes;
    }

    get status() {
        return this._status;
    }

    get priority() {
        return this._priority;
    }

    complete() {
        this._status = Status.COMPLETED;
    }

    setPriority(priority) {
        this._priority = priority;
    }

}

export default Task;