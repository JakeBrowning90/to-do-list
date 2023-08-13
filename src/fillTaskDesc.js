//Populates taskDesc column with task details, edit button, and delete button
import { taskList, updateStorage } from "./taskFactory";
import { clearView } from "./clearView";
import { drawListView } from "./drawListView";
import { drawFormView } from "./drawFormView";
import { format } from 'date-fns';
import EditIcon from './img/edit.svg';
import DeleteIcon from './img/delete.svg';


function fillTaskDesc(title, desc, priority, category, dueDate, indexPosition) {
    const taskDescColumn = document.querySelector('.taskDescColumn');

    //Clear placeholder text
    while (taskDescColumn.firstChild) {
        taskDescColumn.removeChild(taskDescColumn.lastChild);
    }

    //taskDescColumn.textContent = null;
    const taskDetailName = document.createElement('div');
    taskDetailName.classList.add('taskDetailName');
    taskDetailName.textContent = title;
    const taskDetailCategory = document.createElement('div');
    taskDetailCategory.classList.add('taskDetailCategory');
    taskDetailCategory.textContent = category;
    const taskDetailPriority = document.createElement('div');
    taskDetailPriority.classList.add('taskDetailPriority');
    taskDetailPriority.textContent = priority;

    const taskDetailDueDate = document.createElement('div');
    taskDetailDueDate.classList.add('taskDetailDueDate');
    taskDetailDueDate.textContent = dueDate;
    // taskDetailDueDate.textContent = format(new Date(dueDate), 'PP');
    
    const taskDetailDescription = document.createElement('div');
    taskDetailDescription.classList.add('taskDetailDescription');
    taskDetailDescription.textContent = desc;

    const editTaskBtn = document.createElement('button');
    editTaskBtn.classList.add('editTaskBtn');
    // editTaskBtn.textContent = "Edit";
    // const editTaskIcon = document.createElement('img');
    // editTaskIcon.setAttribute("src","../src/img/edit.svg")
    // editTaskIcon.setAttribute("alt", "Edit task")
    const editIcon = new Image();
    editIcon.src = EditIcon;
    editTaskBtn.appendChild(editIcon);

    editTaskBtn.addEventListener("click", function () {
        //Brings up "New task form" populated with current task details and position to override old version on submission
        clearView();
        drawFormView(title, desc);
    });

    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('deleteTaskBtn');
    // deleteTaskBtn.textContent = "Delete";

    // const deleteTaskIcon = document.createElement('img');
    // deleteTaskIcon.setAttribute("src","../src/img/delete.svg");
    // deleteTaskIcon.setAttribute("alt", "Delete task");
    const deleteIcon = new Image();
    deleteIcon.src = DeleteIcon;
    deleteTaskBtn.appendChild(deleteIcon);

    deleteTaskBtn.addEventListener("click", function () {
        // Removes current task from array and redraws list view
        // console.log("removed!")
        // deleteTask(title);
        taskList.splice(indexPosition, 1);
        updateStorage();
        clearView();
        drawListView();
    });
    taskDescColumn.appendChild(taskDetailName);
    taskDescColumn.appendChild(taskDetailCategory);
    taskDescColumn.appendChild(taskDetailPriority);
    taskDescColumn.appendChild(taskDetailDueDate);
    taskDescColumn.appendChild(taskDetailDescription);
    taskDescColumn.appendChild(editTaskBtn);
    // editTaskBtn.appendChild(editTaskIcon);
    taskDescColumn.appendChild(deleteTaskBtn);
    // deleteTaskBtn.appendChild(deleteTaskIcon);
}

export { fillTaskDesc };