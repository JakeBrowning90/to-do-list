//TODO: completion status? (New, In Progress)
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

//Set tasklist with array in localStorage or blank array
function checkStorage() {
    if (JSON.parse(localStorage.getItem('taskList')) != null) {
        let savedList = JSON.parse(localStorage.getItem('taskList'))
        return savedList;
    } else {
        return [];
    }
}

// TODO: sort taskList by dueDate
let taskList = checkStorage();

function updateStorage() {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

//Add new task to array, update array in localStorage
function addTaskToList(Task) {
    taskList.push(Task);
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

export { Task, addTaskToList, updateStorage, checkStorage, taskList };