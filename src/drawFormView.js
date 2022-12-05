//TO-DO: Draw single div, form, with inputs for new task
import { drawListView } from './drawListView';
import { clearView } from './clearView';

const drawFormView = () => {
    console.log("Testing drawFormView");
    const content = document.querySelector('#content');
    const taskFormContent = document.createElement('div');
    taskFormContent.classList.add('taskFormContent');
    taskFormContent.textContent = "Form for new task";

    // Cancel new task creation and return to list view
    const cancelNewTaskBtn = document.createElement('button');
    cancelNewTaskBtn.textContent = "Cancel";
    cancelNewTaskBtn.addEventListener("click", function () {
        clearView();
        drawListView();
    });

    taskFormContent.appendChild(cancelNewTaskBtn);
    content.appendChild(taskFormContent);
}

export { drawFormView };