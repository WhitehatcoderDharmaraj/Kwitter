//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            u_name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").innerHTML="";
}
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
u_name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+u_name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-waring' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button>"
//End code
      } });  }); }
getData();

function logout(){
 localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

function send(){
      
}