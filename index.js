 // Detecting button press
 var numberofDrumsbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofDrumsbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    var buttonInnerHTML = this.innerHTML;
    this.style.color = "white"; // Change color on click
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(key);
  }
}
// Add event listener for keyup to reset color
  document.addEventListener("keyup", function (event) {
    var key = event.key; // Get the key that was released
    var button = document.querySelector("." + key); // Select the button with that key class
    if (button) { // Check if the button exists
      button.style.color = "black"; // Reset color on key release
    }
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}