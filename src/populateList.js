// Reads array of tasks and creates a div for each one

import {  checkStorage, getTasks, db } from "./taskFactory";
import { fillTaskDesc } from "./fillTaskDesc";
import { format } from 'date-fns';

//Fill list view using taskList Array
async function populateList(category) {
    const displayedTasks = document.querySelector('.displayedTasks');

    while (displayedTasks.firstChild) {
        displayedTasks.removeChild(displayedTasks.lastChild);
    }
    //Get current taskList from localStorage
    // let taskList = checkStorage();
    let taskList = await getTasks(db);
        // Gets all tasks 
        if (category == null) {
            for (const task in taskList) {
                let taskRow = document.createElement('div');
                taskRow.classList.add('taskRow');

                let taskRadioSpan = document.createElement('label');
                let taskRowName = document.createElement('div');
                taskRowName.classList.add('taskRowName');
                let taskRowDate = document.createElement('div');
                taskRowDate.classList.add('taskRowDate');
                let taskRowSelectMark = document.createElement('div');
                taskRowSelectMark.classList.add('taskRowDefaultMark');
                let selectionRadio = document.createElement('input');
                selectionRadio.setAttribute('type', 'radio');
                selectionRadio.setAttribute('name', 'currentSelection');

                taskRowName.textContent = taskList[task].title;
                //Testing date-fns
                // console.log(format(new Date(taskList[task].dueDate), 'PP'));

                //OLD WAY: taskRowDate.textContent = taskList[task].dueDate;
                taskRowDate.textContent = format(new Date(taskList[task].dueDate), 'PP');

                taskRow.appendChild(taskRowName);
                taskRow.appendChild(taskRowDate);
                taskRow.appendChild(taskRowSelectMark);
                taskRowSelectMark.appendChild(selectionRadio);

                taskRow.addEventListener("click", function () {
                    fillTaskDesc(taskList[task].title, taskList[task].description, taskList[task].priorityLevel, taskList[task].taskCategory, taskList[task].dueDate);
                    //TODO: function to change class of taskRowSelectMark, make current row YELLOW
                    // let unselectedTasks = document.querySelectorAll('taskRowDefaultMark');
                    // console.log(unselectedTasks);
                    // unselectedTasks.classList.remove('taskRowCurrentMark');
                    // taskRowSelectMark.classList.add('taskRowCurrentMark');
                });
                
                taskRadioSpan.appendChild(taskRow);
                displayedTasks.appendChild(taskRadioSpan);
            } 
        }
        // Gets only tasks in chosen category
        else {
            for (const task in taskList) {
                    if (taskList[task].taskCategory == category) {
                    let taskRow = document.createElement('div');
                    taskRow.classList.add('taskRow');
                    
                    let taskRadioSpan = document.createElement('label');
                    let taskRowName = document.createElement('div');
                    taskRowName.classList.add('taskRowName');
                    let taskRowDate = document.createElement('div');
                    taskRowDate.classList.add('taskRowDate');
                    let taskRowSelectMark = document.createElement('div');
                    taskRowSelectMark.classList.add('taskRowDefaultMark');
                    let selectionRadio = document.createElement('input');
                    selectionRadio.setAttribute('type', 'radio');
                    selectionRadio.setAttribute('name', 'currentSelection');

                    taskRowName.textContent = taskList[task].title;
                    taskRowDate.textContent = taskList[task].dueDate;
                    taskRow.appendChild(taskRowName);
                    taskRow.appendChild(taskRowDate);
                    taskRow.appendChild(taskRowSelectMark);
                    taskRowSelectMark.appendChild(selectionRadio);

                    taskRow.addEventListener("click", function () {
                        fillTaskDesc(taskList[task].title, taskList[task].description, taskList[task].priorityLevel, taskList[task].taskCategory, taskList[task].dueDate, task);
                    });

                    taskRadioSpan.appendChild(taskRow);
                    displayedTasks.appendChild(taskRadioSpan);
                }
            } 
        }
}

export { populateList };