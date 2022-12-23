//TO-DO: 

let taskList = [
    {"title": "Walk dog", "description": "Take Loki to play at the beach", "dueDate": "15 December 2022", "priorityLevel": "Normal", "taskCategory": "House"},
    {"title": "Fix toilet seat", "description": "Tools in garage", "dueDate": "15 December 2022", "priorityLevel": "Essential", "taskCategory": "House"},
    {"title": "Bake cake", "description": "Chocolate cake for Flint's birthday", "dueDate": "12 May 2023", "priorityLevel": "Essential", "taskCategory": "Hobby"},
    {"title": "Reply to Discord event", "description": "Mario Kart game night", "dueDate": "12 May 2023", "priorityLevel": "Normal", "taskCategory": "Hobby"},
    {"title": "Practice German", "description": "Start new Anki deck", "dueDate": "11 December 2022", "priorityLevel": "Normal", "taskCategory": "Work"},
    {"title": "Complete JavaScript exercise", "description": "Clone github repo", "dueDate": "22 December 2022", "priorityLevel": "Essential", "taskCategory": "Work"},
    {"title": "Make dentist appointment", "description": "Get morning timeslot", "dueDate": "22 December 2022", "priorityLevel": "Normal", "taskCategory": "Hobby"},
    {"title": "Shop for gift", "description": "Charity shops", "dueDate": "22 December 2022", "priorityLevel": "Normal", "taskCategory": "House"}
];

//TODO: add taskCategory, dueDate, priorityLevel, completionStatus back after testing
class Task {
    constructor(title, description, dueDate, priorityLevel, taskCategory) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate; 
        this.priorityLevel = priorityLevel;
        this.taskCategory = taskCategory;
        // this.completionStatus = completionStatus;
    }
};

function addTaskToList(Task) {
    taskList.push(Task)
}

export { taskList, addTaskToList, Task };