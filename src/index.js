import './reset.css';
import './style.css';
import { drawListView } from './drawListView';
import { drawFormView } from './drawFormView';
import { clearView } from './clearView';
import Icon from './img/add.svg';

// localStorage Test
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
  // console.log('We can use localStorage')
} else {
  // console.log('No localStorage for us')
}
  
//Draw default screen on page load
drawListView();

//Removes list view and calls form view
const addTaskButton = document.getElementById('addTaskButton');
const addIcon = new Image();
addIcon.src = Icon;
addTaskButton.appendChild(addIcon);

addTaskButton.addEventListener("click", function () {
    clearView();
    drawFormView();
});
