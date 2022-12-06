//TO-DO: 

let taskList = [
    {"title": "Walk dog", "description": "Take Loki to play at the beach"},
    {"title": "Bake cake", "description": "Chocolate cake for Flint's birthday"},
    {"title": "Practice German", "description": "Start new Anki deck"},
];

//TODO: add taskCategory, dueDate, priorityLevel, completionStatus back after testing
class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        // this.dueDate = dueDate;
        // this.priorityLevel = priorityLevel;
        // this.completionStatus = completionStatus;
    }
};

function addTaskToList(Task) {
    taskList.push(Task)
}

export { taskList, addTaskToList, Task };