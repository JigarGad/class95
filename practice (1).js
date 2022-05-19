const firebaseConfig = {
  apiKey: "AIzaSyB0dm4lgtzWF6HVgsGE0mXLgnBx0a6YY9o",
  authDomain: "class-93-191ec.firebaseapp.com",
  databaseURL: "https://class-93-191ec-default-rtdb.firebaseio.com",
  projectId: "class-93-191ec",
  storageBucket: "class-93-191ec.appspot.com",
  messagingSenderId: "897532865414",
  appId: "1:897532865414:web:6a1cea825d5172ee21da07",
  measurementId: "G-3Y4J37FKGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


