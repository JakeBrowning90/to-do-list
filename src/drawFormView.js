import { drawListView } from './drawListView';
import { clearView } from './clearView';
import { addTaskToList, Task, checkStorage, getTasks, db,setDoc, doc } from './taskFactory';
import { format } from 'date-fns';
import CloseIcon from './img/close.svg';
import SaveIcon from './img/save.svg';

async function drawFormView(title, desc, indexPosition, priorityLevel, taskCategory, dueDate) {

    let taskList = checkStorage();

    const content = document.querySelector('main');
    const taskFormContent = document.createElement('form');
    taskFormContent.classList.add('taskFormContent');

    const taskNameDiv = document.createElement("div");
    taskNameDiv.classList.add('formTextInput', 'taskNameDiv');
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
    taskDescDiv.classList.add('formTextInput', 'taskDescDiv');
    const taskDescLabel = document.createElement("label");
    taskDescLabel.setAttribute("for", "taskDesc");
    taskDescLabel.textContent = "Description:";
    const taskDescField = document.createElement("textarea");
    taskDescField.setAttribute("required", "");
    if (desc != undefined) {
        taskDescField.textContent = desc;
    }
    taskDescField.setAttribute("id", "taskDesc");
    taskDescField.setAttribute("name", "taskDesc");

    const taskPriorityDiv = document.createElement("div");
    taskPriorityDiv.classList.add('formTextInput', 'taskPriorityDiv');
    const taskPriorityLabel = document.createElement("label");
    taskPriorityLabel.setAttribute("for", "taskPriority");
    taskPriorityLabel.textContent = "Priority:";
    const taskPriorityField = document.createElement("select");

    taskPriorityField.setAttribute("required", "");
    if (priorityLevel != undefined) {
        taskPriorityField.setAttribute("value", priorityLevel);
    }
    taskPriorityField.setAttribute("id", "taskPriority");
    taskPriorityField.setAttribute("name", "taskPriority");

    const essentialOption = document.createElement("option");
    essentialOption.textContent= "Essential";
    essentialOption.setAttribute('value', 'Essential');
    const normalOption = document.createElement("option");
    normalOption.textContent= "Normal";
    normalOption.setAttribute('value', 'Normal');

    taskPriorityField.appendChild(normalOption);
    taskPriorityField.appendChild(essentialOption);

    const taskCategoryDiv = document.createElement("div");
    taskCategoryDiv.classList.add('formTextInput', 'taskCategoryDiv');
    const taskCategoryLabel = document.createElement("label");
    taskCategoryLabel.setAttribute("for", "taskCategory");
    taskCategoryLabel.textContent = "Category:";
    const taskCategoryField = document.createElement("select");

    const workOption = document.createElement("option");
    workOption.textContent= "Work";
    workOption.setAttribute('value', 'Work');
    const houseOption = document.createElement("option");
    houseOption.textContent= "House";
    houseOption.setAttribute('value', 'House');
    const hobbyOption = document.createElement("option");
    hobbyOption.textContent= "Hobby";
    hobbyOption.setAttribute('value', 'Hobby');

    taskCategoryField.appendChild(workOption);
    taskCategoryField.appendChild(houseOption);
    taskCategoryField.appendChild(hobbyOption);

    taskCategoryField.setAttribute("required", "");
    if (taskCategory != undefined) {
        taskCategoryField.setAttribute("value", taskCategory);
    }
    taskCategoryField.setAttribute("id", "category");
    taskCategoryField.setAttribute("name", "category");

    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add('formTextInput', 'dueDateDiv');
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due date:";
    const dueDateField = document.createElement("input");
    dueDateField.setAttribute("type", "date");
    dueDateField.setAttribute("required", "");
    if (dueDate != undefined) {
        dueDateField.setAttribute("value", dueDate);
    }
    dueDateField.setAttribute("id", "dueDateInput");
    dueDateField.setAttribute("name", "dueDateInput");

    // Add new task to list and return to list view
    const submitNewTaskBtn = document.createElement('button');
    submitNewTaskBtn.setAttribute("type", "submit");
    submitNewTaskBtn.setAttribute("id", "addTask");
    // submitNewTaskBtn.textContent = "Add Task";
    const saveIcon = new Image();
    saveIcon.src = SaveIcon;
    submitNewTaskBtn.appendChild(saveIcon);

    // Cancel new task creation and return to list view
    const cancelNewTaskBtn = document.createElement('button');
    cancelNewTaskBtn.classList.add('cancelNewTaskBtn');
    // cancelNewTaskBtn.textContent = "Cancel";
    const closeIcon = new Image();
    closeIcon.src = CloseIcon;
    cancelNewTaskBtn.appendChild(closeIcon);
    cancelNewTaskBtn.addEventListener("click", function () {
        clearView();
        drawListView();
    });

    taskFormContent.appendChild(taskNameDiv);
    taskNameDiv.appendChild(taskNameLabel);
    taskNameDiv.appendChild(taskNameField);

    taskFormContent.appendChild(taskCategoryDiv);
    taskCategoryDiv.appendChild(taskCategoryLabel);
    taskCategoryDiv.appendChild(taskCategoryField);

    taskFormContent.appendChild(taskPriorityDiv);
    taskPriorityDiv.appendChild(taskPriorityLabel);
    taskPriorityDiv.appendChild(taskPriorityField);

    taskFormContent.appendChild(dueDateDiv);
    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDateField);

    taskFormContent.appendChild(taskDescDiv);
    taskDescDiv.appendChild(taskDescLabel);
    taskDescDiv.appendChild(taskDescField);
    const formButtonDiv = document.createElement('div');
    formButtonDiv.classList.add('formButtonDiv');
    taskFormContent.appendChild(formButtonDiv);
    formButtonDiv.appendChild(cancelNewTaskBtn);
    formButtonDiv.appendChild(submitNewTaskBtn);
    //TODO: move this to createTask module
    taskFormContent.addEventListener("submit", (event) => {
        event.preventDefault();
        let formattedDate = format(new Date(`${dueDateInput.value}T00:00`), 'PP');
        let newTask = new Task (taskName.value, taskDesc.value, formattedDate, taskPriorityField.value, category.value);
        if (indexPosition != null) {
            taskList.splice(indexPosition, 1);
        }
        addTaskToList(newTask);
        clearView();
        drawListView();
    });

    content.appendChild(taskFormContent);
}

export { drawFormView };