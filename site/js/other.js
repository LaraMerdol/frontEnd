function goDash(){

  if(localStorage.getItem("type")== "student"){
    window.location.href = "DashboardStudent.html";
  }
  else if(localStorage.getItem("type")== "instructor"){
    window.location.href = "DashboardInstructor.html";
  }
} 
function sendMessage() {
  var message1 = document.getElementById("usermsg").value;
  var li = document.createElement("LI");  
  li.innerHTML = message1;
  li.value= message;
  if(li.innerHTML != ""){
    document.getElementById("messages").appendChild(li);
  }
  
  console.log(li.innerHTML);
  document.getElementById("usermsg").value = "";

}