
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDghDuuHj-NkdbrThPSqX-i1O-APFQbuvM",
      authDomain: "kwitter-96456.firebaseapp.com",
      databaseURL: "https://kwitter-96456-default-rtdb.firebaseio.com",
      projectId: "kwitter-96456",
      storageBucket: "kwitter-96456.appspot.com",
      messagingSenderId: "469051155959",
      appId: "1:469051155959:web:2b69c0c6888f33601cfaf2"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    

    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!!!!!!!!!!!!!!"

    function addRoom(){
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"ADDING ROOM NAME"
});

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}



