// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, doc, getDocs, setDoc, deleteDoc  } from 'firebase/firestore';

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyCHxTqQvnTAjl5ooscMWvpQah6OHCMCXJ4",
//   authDomain: "to-do-list-953be.firebaseapp.com",
//   projectId: "to-do-list-953be",
//   storageBucket: "to-do-list-953be.appspot.com",
//   messagingSenderId: "42011707913",
//   appId: "1:42011707913:web:1d400cc3a58e78372d86d8",
//   measurementId: "G-1B2229JLQY"
// });

// const db = getFirestore(firebaseApp)
// // db.collection('tasks').getDocs();
// // const todosCol = collection(db, 'tasks')
// // getTasks(db)

// async function getTasks(db) {
//     const tasksCol = collection(db, 'tasks');
//     const tasksSnapshot = await getDocs(tasksCol);
//     const taskListDB = tasksSnapshot.docs.map(doc => doc.data());
//     // console.log(taskListDB)
//     return taskListDB;
// }

// async function deleteTask(title) {
//     await deleteDoc(doc(db, "tasks", title));
// }
// let taskList = getTasks(db);

//TODO: completion status?
class Task {
    constructor(title, description, dueDate, priorityLevel, taskCategory) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate; 
        this.priorityLevel = priorityLevel;
        this.taskCategory = taskCategory;
        // this.completionStatus = completionStatus;
    }
};

//Set tasklist with array in localStorage or blank array
function checkStorage() {
    if (JSON.parse(localStorage.getItem('taskList')) != null) {
        let savedList = JSON.parse(localStorage.getItem('taskList'))
        return savedList;
    } else {
        return [];
    }
}

let taskList = checkStorage();

function updateStorage() {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

//Add new task to array, update array in localStorage
function addTaskToList(Task) {
    // setDoc(doc(db, "tasks", docKey), {
    //     title: Task.title,
    //     description: Task.description,
    //     dueDate: Task.dueDate,
    //     priorityLevel: Task.priorityLevel,
    //     taskCategory: Task.taskCategory,
    //   });
    taskList.push(Task);
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

export { Task, addTaskToList, updateStorage, checkStorage, taskList };