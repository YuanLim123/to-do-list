import Status  from "../Enum/Status.js";

class Task {
    constructor(title, description, dueDate, priority, notes, status = Status.INCOMPLETE, id = crypto.randomUUID()) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._status = status;
    }
    get id() {
        return this._id;
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

    update(updateFields) {
        const { title, description, dueDate, notes, priority, status } = updateFields;
        if (title !== undefined) this._title = title;
        if (description !== undefined) this._description = description;
        if (dueDate !== undefined) this._dueDate = dueDate;
        if (notes !== undefined) this._notes = notes;
        if (priority !== undefined) this._priority = priority;
        if (status !== undefined) this._status = status;
    }

}

export default Task;