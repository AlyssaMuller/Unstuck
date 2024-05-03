
var myAnswersList = [
    { answer: "Boohoo, you&#39;re going to fail" },
    { answer: "...If you bring me one white sauce pizza I&#39;ll make sure to add a couple bonus points" },
    { answer: "Sounds like you could use a snickers!" },
    { answer: "You have nothing to worry about!" }];
console.log("myAnswers");

//var myAnswersList = []

var h1 = document.querySelector('h1');
console.log("h1 query:", h1);

var h2 = document.querySelector('h2');

var myButton = document.querySelector("#myButton");
console.log("Button query: ", myButton);

var myList = document.querySelector("#myList");
console.log("My list query: ", myList);

myButton.onclick = (function () {
    if (Math.random() < 0.5) {
        h1.style.color = "white";
    } else {
        h1.style.color = "#beca8b";
    }

    h1.innerHTML = "Here's your answer:";
    var randomIndex = Math.floor(Math.random() * myAnswersList.length);
    var randomAnswer = myAnswersList[randomIndex];

    var newListItem = document.createElement("li");
    newListItem.innerHTML = randomAnswer.answer;
    myList.appendChild(newListItem);
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

//load from JSONbin as JSON data
function myAnswers() {
    fetch("https://api.jsonbin.io/b/61e99761a785682f97198e37/2").then(function (response) {
        response.json().then(function (data) {
            console.log("from the server: ", data);
            myAnswersList = data;
        });
    });
}

//when the page loads, call function
myAnswers();
