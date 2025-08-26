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

    complete() {
        this._status = Status.COMPLETED;
    }

    setPriority(priority) {
        this._priority = priority;
    }

}

export default Task;