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
            taskRow.textContent = taskList[task].title;

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
                taskRow.textContent = taskList[task].title;

                taskRow.addEventListener("click", function () {
                    fillTaskDesc(taskList[task].title, taskList[task].description, taskList[task].priorityLevel, taskList[task].taskCategory, taskList[task].dueDate, task);
                });
                displayedTasks.appendChild(taskRow);
            }
        } 
    }
}

export { populateList };