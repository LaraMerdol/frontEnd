const NAME = Symbol();
const PASS = Symbol();
class User {

 set uname(uname){
    this[NAME]=uname;

  }
 set pass(pass){
    this[PASS]=pass;

  }
 get uname(){
    return this[NAME];

  }
 get pass(){
    return this[PASS];

  }  
 static get unameS(){
    return document.getElementById("Uname").value;

  }
static get passS(){
    return document.getElementById("Pass").value;

  }  
}

const user = new User( );
function loginToSystem() {
  user.uname = document.getElementById("Uname").value;
  user.pass =document.getElementById("Pass").value ;
  if(user.uname== "Lara" && user.pass == "12345"){
    window.location.href = "DashboardStudent.html";
  }
  if(user.uname== "Eray" && user.pass == "12345"){
    window.location.href = "DashboardInstructor.html";
  }

}

function goDash(){
  console.log("olmadı: "+ user.unameS+ "oldu");
  if(user.unameS== "Lara" && user.passS == "12345"){
    window.location.href = "DashboardStudent.html";
  }
  if(user.unameS== "Eray" && user.passS == "12345"){
    window.location.href = "DashboardInstructor.html";
  }
} 