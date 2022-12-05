//TO-DO: 

let taskList = [
    {"title": "Walk dog", "description": "Take Loki to play at the beach"},
    {"title": "Bake cake", "description": "Chocolate cake for Flint's birthday"},
    {"title": "Practice German", "description": "Start new Anki deck"},
];

class Task {
    constructor(title, description, dueDate, priorityLevel, completionStatus) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
        this.completionStatus = completionStatus;
    }
};

export { taskList };