     
function clearContents(element) {
  element.value = '';
}

var rateQuestionList = new Array();
var MultipleChoiceQuestionList = new Array();
var openEndedQuestionList = new Array();
function addRateQuestion (){

  const question = { questionText: document.getElementById("RateQuestionQ").value , questionRate :  document.getElementById("selectedRate").value }; 
  rateQuestionList.push(question);
  //console.log(rateQuestionList[size1-1].questionText );
   var li = document.createElement("LI");
   li.innerHTML =  question.questionText + "<br>"+ " Maximum Rate: "+ question.questionRate;
   document.getElementById("Ratequestions").appendChild(li);


} 

function addOpenEndedQuestion (){
  const question = { questionText: document.getElementById("OpenEndedQ").value}; 
  openEndedQuestionList.push(question);
  //console.log(rateQuestionList[0].questionText );
   var li = document.createElement("LI");
   li.innerHTML =  question.questionText ;
   document.getElementById("OpenEndedquestions").appendChild(li);


} 

function addMultipleChoiceQuestion (){

                     
            
  const lis = document.getElementById("answerList").innerText;
  var coices = new Array;
  var i = 0;
  var j= 5;
  var length =lis.length;
  var k = 0;
  while(j<= length){
    if( lis.substring(i,j+1) == "delete"){
      coices.push( lis.substring(k,i));
      k=j+1;
      i=i+6;
      j=j+6;
    }
    i++;
    j++;
  }
    const question = { questionText: document.getElementById("MultipleChoiceQ").value,
                       coiceList:coices}; 


    var li = document.createElement("LI");
    li.innerHTML =  question.questionText + "<br>"+ question.coiceList.join("<br>");
    document.getElementById("Choicequestions").appendChild(li);
    MultipleChoiceQuestionList.push(question);
  

}

function addItem(){
  var li = document.createElement("LI");  
  var input = document.getElementById("ChoiceText");
  li.innerHTML = input.value;
  
  input.value = ChoiceText.innerHTML;
  li.value =ChoiceText.innerHTML;
  var buttonE = document.createElement('button');
  li.append(buttonE);
  buttonE.innerText = 'delete';
  buttonE.onclick = function() { // remove list item here
    li.remove();
    buttonE.remove();
  };
document.getElementById("answerList").appendChild(li);

        

}

   
function submit () {
     console.log("Submitted");
     console.log("Open Ended Question List"+" ");
     console.log(openEndedQuestionList);
     console.log("Multiple Choice Question List"+" ");
     console.log(MultipleChoiceQuestionList);
     console.log("Rate Question List"+" ");
     console.log(rateQuestionList);

}   

//login function

function loginToSystem() {
  var uname = document.getElementById("Uname").value;
  var pass = document.getElementById("Pass").value;
  if(uname== "Lara" && pass == "12345"){
    console.log("111");
    window.location.href = "DashboardStudent.html";
  }
  if(uname== "Eray" && pass == "12345"){
    console.log("111");
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



//Pop up ınstructor start groyp formation
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("groupFormB");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//pop-up end