import './reset.css';
import './style.css';
import { taskList } from './taskFactory';
import { drawListView } from './drawListView';
import { drawFormView } from './drawFormView';
import { clearView } from './clearView';

//Draw default screen on page load
drawListView();
console.log("Testing index.js");
//console.log(taskList)

const addTaskButton = document.getElementById('addTaskButton');
addTaskButton.addEventListener("click", function () {
    clearView();
    drawFormView();
});

// const viewListButton = document.getElementById('viewListButton');
// viewListButton.addEventListener("click", function () {
//     clearView();
//     drawListView();
// });

