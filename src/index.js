import './reset.css';
import './style.css';
import { taskList } from './taskFactory';
import { drawListView } from './drawListView';
import { drawFormView } from './drawFormView';
import { clearView } from './clearView';


// import { initializeApp } from 'firebase/app';
// import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCHxTqQvnTAjl5ooscMWvpQah6OHCMCXJ4",
//     authDomain: "to-do-list-953be.firebaseapp.com",
//     projectId: "to-do-list-953be",
//     storageBucket: "to-do-list-953be.appspot.com",
//     messagingSenderId: "42011707913",
//     appId: "1:42011707913:web:1d400cc3a58e78372d86d8",
//     measurementId: "G-1B2229JLQY"
//   };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)  

// try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
  
//Draw default screen on page load
drawListView();

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

