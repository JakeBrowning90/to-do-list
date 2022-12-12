//TO-DO: fill taskDesc column with task details, edit button, and delete button
import { taskList } from "./taskFactory";
import { clearView } from "./clearView";
import { drawListView } from "./drawListView";
import { drawFormView } from "./drawFormView";

function fillTaskDesc(title, desc, priority, category, dueDate, indexPosition) {
    const taskDescColumn = document.querySelector('.taskDescColumn');
    taskDescColumn.textContent = null;
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
    const taskDetailDescription = document.createElement('div');
    taskDetailDescription.classList.add('taskDetailDescription');
    taskDetailDescription.textContent = desc;

    const editTaskBtn = document.createElement('button');
    editTaskBtn.classList.add('editTaskBtn');
    editTaskBtn.textContent = "Edit";
    editTaskBtn.addEventListener("click", function () {
        //console.log("EDIT!");
        clearView();
        //TO-DO: New function with modified form view, delete old version from list ONLY if changes are approved
        drawFormView(title, desc, indexPosition);
        //taskList.splice(indexPosition, 1);
    });

    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('deleteTaskBtn');
    deleteTaskBtn.textContent = "Delete";
    deleteTaskBtn.addEventListener("click", function () {
        //console.log("DELETE" + indexPosition);
        taskList.splice(indexPosition, 1);
        //console.log(taskList);
        clearView();
        drawListView();
    });
    taskDescColumn.appendChild(taskDetailName);
    taskDescColumn.appendChild(taskDetailCategory);
    taskDescColumn.appendChild(taskDetailPriority);
    taskDescColumn.appendChild(taskDetailDueDate);
    taskDescColumn.appendChild(taskDetailDescription);
    taskDescColumn.appendChild(editTaskBtn);
    taskDescColumn.appendChild(deleteTaskBtn);
}

export { fillTaskDesc };

// function removeBook(libraryPosition) {
//     library.splice(libraryPosition, libraryPosition + 1);
//     refreshPage();
//     printLibrary();
// }