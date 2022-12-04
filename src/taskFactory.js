let taskList = [ 1, 2, 3];

class Task {
    constructor(title, description, dueDate, priorityLevel, completionStatus) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
        this.completionStatus = completionStatus;
    }
}

export { taskList }