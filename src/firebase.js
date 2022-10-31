import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwVxT0xYo83WIBjrP5k56REx4u-akdluU",
  authDomain: "todo-crud-1d565.firebaseapp.com",
  projectId: "todo-crud-1d565",
  storageBucket: "todo-crud-1d565.appspot.com",
  messagingSenderId: "469434355245",
  appId: "1:469434355245:web:8078165e215cccb4f172a4",
  measurementId: "G-DLZ75H5XLB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
