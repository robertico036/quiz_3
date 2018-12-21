// var triviaApp = "http://api.techlaunch.io:88/all";
// var correctAnswer;
// var opt1;
// var opt2;
// var opt3;
var author;
var quoteCont;


var quoteCont = document.querySelector(".quoteContainer");

function getRandom(){
  fetch('http://api.techlaunch.io:88/random')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    triviaApp.innerHTML = `
    <p>${data.author}</p>
    <p>${data.text}</p>
    <p>${data.source}</p>
  `
  })
  .catch()
}
// Math.round
getRandom();