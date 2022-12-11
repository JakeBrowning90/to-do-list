//TO-DO: fill taskDesc column with task details, edit button, and delete button
import { taskList } from "./taskFactory";
import { clearView } from "./clearView";
import { drawListView } from "./drawListView";
import { drawFormView } from "./drawFormView";

function fillTaskDesc(title, desc, priority, category, dueDate, indexPosition) {
    const taskDescColumn = document.querySelector('.taskDescColumn');
    taskDescColumn.textContent = title + ": "+ desc + priority + category + dueDate;

    const editTaskBtn = document.createElement('button');
    editTaskBtn.textContent = "Edit";
    editTaskBtn.addEventListener("click", function () {
        console.log("EDIT!");
        clearView();
        //TO-DO: New function with modified form view, delete old version from list ONLY if changes are approved
        drawFormView(title, desc, indexPosition);
        //taskList.splice(indexPosition, 1);
    });

    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.textContent = "Delete";
    deleteTaskBtn.addEventListener("click", function () {
        //console.log("DELETE" + indexPosition);
        taskList.splice(indexPosition, 1);
        //console.log(taskList);
        clearView();
        drawListView();
    });
    taskDescColumn.appendChild(editTaskBtn);
    taskDescColumn.appendChild(deleteTaskBtn);
}

export { fillTaskDesc };

// function removeBook(libraryPosition) {
//     library.splice(libraryPosition, libraryPosition + 1);
//     refreshPage();
//     printLibrary();
// }