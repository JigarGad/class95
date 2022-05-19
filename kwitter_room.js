
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


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
