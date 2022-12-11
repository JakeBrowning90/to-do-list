//TO-DO: draw 2 columns with list of tasks on left, current task details on right
import { taskList } from "./taskFactory";
import { fillTaskDesc } from "./fillTaskDesc";
import { populateList } from "./populateList";
import { clearView } from "./clearView";

const drawListView = () => {
    // console.log("Testing drawListView");
    const content = document.querySelector('#content');
    const listViewContent = document.createElement('div');
    listViewContent.classList.add('listViewContent');
    const taskListColumn = document.createElement('div');
    taskListColumn.classList.add('taskListColumn');

    //TODO: Give each tab populateList fnuction, argument to sort by category
    const taskCategoryTabs = document.createElement('div');
    taskCategoryTabs.classList.add('taskCategoryTabs');
    const mainTab = document.createElement('button');
    const workTab = document.createElement('button');
    const houseTab = document.createElement('button');
    const hobbyTab = document.createElement('button');
    mainTab.textContent = "All"
    houseTab.textContent = "House"
    workTab.textContent = "Work"
    hobbyTab.textContent = "Hobbies"

    mainTab.addEventListener("click", function () {
        console.log("Main tab");
        populateList();
    });

    workTab.addEventListener("click", function () {
        console.log("Work tab");
        populateList("Work");
    });

    houseTab.addEventListener("click", function () {
        console.log("House tab");
        populateList("House");
    });

    hobbyTab.addEventListener("click", function () {
        console.log("Hobby tab");
        populateList("Hobby");
    });

    const displayedTasks = document.createElement('div');
    displayedTasks.classList.add('displayedTasks');

    const taskDescColumn = document.createElement('div');
    taskDescColumn.classList.add('taskDescColumn');
    taskDescColumn.textContent = "Select a task to display details and options";

    content.appendChild(listViewContent);
    listViewContent.appendChild(taskListColumn);
    taskListColumn.appendChild(taskCategoryTabs);
    taskListColumn.appendChild(displayedTasks);
    taskCategoryTabs.appendChild(mainTab);
    taskCategoryTabs.appendChild(houseTab);
    taskCategoryTabs.appendChild(workTab);
    taskCategoryTabs.appendChild(hobbyTab);
    listViewContent.appendChild(taskDescColumn);

    populateList();

    //TO-DO: Move to own module, add condition to list tasks by category, event listener of button
    // for (const task in taskList) {
    //     let taskRow = document.createElement('div');
    //     taskRow.classList.add('taskRow');
    //     taskRow.textContent = taskList[task].title;

    //     taskRow.addEventListener("click", function () {
    //         fillTaskDesc(taskList[task].title, taskList[task].description, taskList[task].priorityLevel, taskList[task].taskCategory, taskList[task].dueDate, task);
    //     });
        
    //     taskListColumn.appendChild(taskRow);
    // } 

}

export { drawListView };