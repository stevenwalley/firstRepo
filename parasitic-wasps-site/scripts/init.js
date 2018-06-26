(function(){
    console.log("damn this is awesome!!!!!")
})();
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Parasitic wasps are sweet, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Parasitic wasps are sweet, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }