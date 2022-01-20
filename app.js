import random

console.log("8BallAssignment");

var x=5;

var myAnswers=[]

var h1=document.querySelector('h1');
console.log("h1 query:", h1);
h1.innerHTML="Nah";

document.h1.onclick=function changeColor(){
	document.h1.style='color:#CC0000';
}

var myButton=document.querySelector("#mainButton");

console.log("button query:", mainButton);

//load from JSONbin as JSON data
function myAnswers(){
	fetch("".then(function(response){
		response.json().then(function(data)){
			console.log("from the server: ", data);
			myAnswers=data;
		});
	});
}

//when the page loads, call function
load myAnswers()