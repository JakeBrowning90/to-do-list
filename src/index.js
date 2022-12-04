import './reset.css';
import './style.css';
import { createTask } from './createTask';
import { taskList } from './taskFactory';
//import { drawPageLayout } from './drawPageLayout';

console.log("Testing index.js");
createTask();
console.log(taskList)
