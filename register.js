  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD3_PDRawPy7EKmw6ANETenI6CEpOQMneQ",
    authDomain: "testlogin-ecfd0.firebaseapp.com",
    projectId: "testlogin-ecfd0",
    storageBucket: "testlogin-ecfd0.appspot.com",
    messagingSenderId: "644578834093",
    appId: "1:644578834093:web:fc1de122c13c6ab4d2b824"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const submit = document.getElementById('submit').value;

  submit.addEventListener("click", function(event){

  })