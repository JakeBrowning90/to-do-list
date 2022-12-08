//TO-DO: Draw single div, form, with inputs for new task
import { drawListView } from './drawListView';
import { clearView } from './clearView';
import { addTaskToList, Task, taskList } from './taskFactory';


//TO-DO: Add condition to set value to blank if undefined
const drawFormView = (title, desc, indexPosition) => {
    //console.log("Testing drawFormView");
    const content = document.querySelector('#content');
    const taskFormContent = document.createElement('form');
    taskFormContent.classList.add('taskFormContent');
   // taskFormContent.textContent = "Form for new task";

    const taskNameDiv = document.createElement("div");
    taskNameDiv.classList.add('formTextInput');
    const taskNameLabel = document.createElement("label");
    taskNameLabel.setAttribute("for", "taskName");
    taskNameLabel.textContent = "Task name:";
    const taskNameField = document.createElement("input");
    taskNameField.setAttribute("required", "");
    if (title != undefined) {
        taskNameField.setAttribute("value", title);
    }
    taskNameField.setAttribute("id", "taskName");
    taskNameField.setAttribute("name", "taskName");

    const taskDescDiv = document.createElement("div");
    taskDescDiv.classList.add('formTextInput');
    const taskDescLabel = document.createElement("label");
    taskDescLabel.setAttribute("for", "taskDesc");
    taskDescLabel.textContent = "Description:";
    const taskDescField = document.createElement("input");
    taskDescField.setAttribute("required", "");
    taskDescField.setAttribute("value", desc);
    taskDescField.setAttribute("id", "taskDesc");
    taskDescField.setAttribute("name", "taskDesc");

    // Add new task to list and return to list view
    //TO-DO: remove old version if editing an existing task
    const submitNewTaskBtn = document.createElement('input');
    submitNewTaskBtn.setAttribute("type", "submit");
    submitNewTaskBtn.setAttribute("id", "addTask");
    submitNewTaskBtn.textContent = "Add Task";
    
    // Cancel new task creation and return to list view
    const cancelNewTaskBtn = document.createElement('button');
    cancelNewTaskBtn.textContent = "Cancel";
    cancelNewTaskBtn.addEventListener("click", function () {
        clearView();
        drawListView();
    });

    taskFormContent.appendChild(taskNameDiv);
    taskNameDiv.appendChild(taskNameLabel);
    taskNameDiv.appendChild(taskNameField);

    taskFormContent.appendChild(taskDescDiv);
    taskDescDiv.appendChild(taskDescLabel);
    taskDescDiv.appendChild(taskDescField);

    taskFormContent.appendChild(cancelNewTaskBtn);
    taskFormContent.appendChild(submitNewTaskBtn);
    //TODO: move this to createTask module
    taskFormContent.addEventListener("submit", (event) => {
        event.preventDefault();
        let newTask = new Task (taskName.value, taskDesc.value);
        taskList.splice(indexPosition, 1);
        addTaskToList(newTask);
        clearView();
        drawListView();
    });

    content.appendChild(taskFormContent);
}

export { drawFormView };