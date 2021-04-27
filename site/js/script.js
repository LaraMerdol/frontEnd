
class User {
  constructor(uname, pass) {
    this.uname= uname;
    this.pass = pass;
  }
}

//login function

function loginToSystem() {
  const user = new User(document.getElementById("Uname").value,document.getElementById("Pass").value );

  if(user.uname== "Lara" && user.pass == "12345"){
    console.log("111");
    window.location.href = "DashboardStudent.html";
  }
  if(user.uname== "Eray" && user.pass == "12345"){
    console.log("111");
    window.location.href = "DashboardInstructor.html";
  }

}

 