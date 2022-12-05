//TO-DO: draw 2 columns with list of tasks on left, current task details on right

import { taskList } from "./taskFactory";

const drawListView = () => {
    console.log("Testing drawListView");
    const content = document.querySelector('#content');
    const listViewContent = document.createElement('div');
    listViewContent.classList.add('listViewContent');
    const taskListColumn = document.createElement('div');
    taskListColumn.textContent = "Tabs for categories, list of tasks";
    const taskDescColumn = document.createElement('div');
    taskDescColumn.textContent = "Details of current task, edit and delete options";

    listViewContent.appendChild(taskListColumn);
    listViewContent.appendChild(taskDescColumn);
    content.appendChild(listViewContent);

    for (const task in taskList) {
        //console.log(taskList[task]);
        let taskRow = document.createElement('div');
        taskRow.classList.add('taskRow');
        taskRow.textContent = taskList[task].title;

        taskRow.addEventListener("click", function () {
            console.log(taskList[task].description);
            taskDescColumn.textContent = taskList[task].description;
        });
        
        taskListColumn.appendChild(taskRow);
    } 

}

export { drawListView };