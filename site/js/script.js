

const NAME = Symbol();
const PASS = Symbol();
const TYPE = Symbol();
class User {

 set uname(uname){
    this[NAME]=uname;

  }
 set pass(pass){
    this[PASS]=pass;

  }
 set type(type){
    this[TYPE]=type;

  }  
 get uname(){
    return this[NAME];

  }
 get pass(){
    return this[PASS];

  } 
 get type(){
    return this[TYPE];


}
}

const user = new User( );
function loginToSystem() {
  localStorage.setItem("name", document.getElementById("Uname").value);

  user.uname = document.getElementById("Uname").value;
  user.pass =document.getElementById("Pass").value ;
  if(user.uname== "Lara" && user.pass == "12345"){
    localStorage.setItem("type", "student");
    user.type = "student";
    window.location.href = "DashboardStudent.html";
  }
  if(user.uname== "Eray" && user.pass == "12345"){
    localStorage.setItem("type", "instructor");
    user.type = "instructor";
    window.location.href = "DashboardInstructor.html";
  }

}
localStorage.setItem(user.uname, "Smith");
function goDash(){

  if(localStorage.getItem("type")== "student"){
    window.location.href = "DashboardStudent.html";
  }
  else if(localStorage.getItem("type")== "instructor"){
    window.location.href = "DashboardInstructor.html";
  }
} 