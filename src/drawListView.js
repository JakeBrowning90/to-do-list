// Draws layout with list of tasks on left, description of current lest on right
import { populateList } from "./populateList";

const drawListView = () => {

    const content = document.querySelector('main');
    const listViewContent = document.createElement('div');
    listViewContent.classList.add('listViewContent');
    const taskListColumn = document.createElement('div');
    taskListColumn.classList.add('taskListColumn');

    // Draws category filter buttons
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
        populateList();
    });

    workTab.addEventListener("click", function () {
        populateList("Work");
    });

    houseTab.addEventListener("click", function () {
        populateList("House");
    });

    hobbyTab.addEventListener("click", function () {
        populateList("Hobby");
    });
    // Draw div for list of all / sorted tasks
    const displayedTasks = document.createElement('div');
    displayedTasks.classList.add('displayedTasks');

    // Draw div for displaying currently focused task
    const taskDescColumn = document.createElement('div');
    taskDescColumn.classList.add('taskDescColumn');
    const blankDescPlaceholder = document.createElement('div');
    blankDescPlaceholder.classList.add('blankDescPlaceholder');
    blankDescPlaceholder.textContent = "Select a task to display details and options";

    content.appendChild(listViewContent);
    listViewContent.appendChild(taskListColumn);
    taskListColumn.appendChild(taskCategoryTabs);
    taskListColumn.appendChild(displayedTasks);
    taskCategoryTabs.appendChild(mainTab);
    taskCategoryTabs.appendChild(houseTab);
    taskCategoryTabs.appendChild(workTab);
    taskCategoryTabs.appendChild(hobbyTab);
    listViewContent.appendChild(taskDescColumn);
    taskDescColumn.appendChild(blankDescPlaceholder);
    
    // Fill the displayedTasks div
    populateList();
}

export { drawListView };