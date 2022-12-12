import { taskList } from "./taskFactory";
import { fillTaskDesc } from "./fillTaskDesc";

function populateList(category) {
    const displayedTasks = document.querySelector('.displayedTasks');

    while (displayedTasks.firstChild) {
        displayedTasks.removeChild(displayedTasks.lastChild);
    }
    
    if (category == null) {
        for (const task in taskList) {
            let taskRow = document.createElement('div');
            taskRow.classList.add('taskRow');

            let taskRowName = document.createElement('div');
            taskRowName.classList.add('taskRowName');
            let taskRowDate = document.createElement('div');
            taskRowDate.classList.add('taskRowDate');
            let taskRowSelectMark = document.createElement('div');
            taskRowSelectMark.classList.add('taskRowSelectMark');

            taskRowName.textContent = taskList[task].title;
            taskRowDate.textContent = taskList[task].dueDate;
            taskRow.appendChild(taskRowName);
            taskRow.appendChild(taskRowDate);
            taskRow.appendChild(taskRowSelectMark);

            taskRow.addEventListener("click", function () {
                fillTaskDesc(taskList[task].title, taskList[task].description, taskList[task].priorityLevel, taskList[task].taskCategory, taskList[task].dueDate, task);
            });
            
            displayedTasks.appendChild(taskRow);
        } 
    }

    else {
        for (const task in taskList) {
                if (taskList[task].taskCategory == category) {
                let taskRow = document.createElement('div');
                taskRow.classList.add('taskRow');
                
                let taskRowName = document.createElement('div');
                taskRowName.classList.add('taskRowName');
                let taskRowDate = document.createElement('div');
                taskRowDate.classList.add('taskRowDate');
                let taskRowSelectMark = document.createElement('div');
                taskRowSelectMark.classList.add('taskRowSelectMark');

                taskRowName.textContent = taskList[task].title;
                taskRowDate.textContent = taskList[task].dueDate;
                taskRow.appendChild(taskRowName);
                taskRow.appendChild(taskRowDate);
                taskRow.appendChild(taskRowSelectMark);

                taskRow.addEventListener("click", function () {
                    fillTaskDesc(taskList[task].title, taskList[task].description, taskList[task].priorityLevel, taskList[task].taskCategory, taskList[task].dueDate, task);
                });
                displayedTasks.appendChild(taskRow);
            }
        } 
    }
}

export { populateList };