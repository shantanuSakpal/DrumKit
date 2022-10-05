for (var i = 0; i < document.querySelectorAll("button").length; i++) {
      document.querySelectorAll("button")[i].addEventListener("click", function () {
            var keyclicked = this.innerHTML;
            playAudio(keyclicked);
            animations(keyclicked);
      });
}
document.addEventListener("keydown", function (event) {
      playAudio(event.key);
      animations(event.key);
});

function playAudio(key) {
      switch (key) {
            case "a":
                  var tom1 = new Audio("sounds/tom-1.mp3")
                  tom1.play();
                  break;
            case "s":
                  var tom2 = new Audio("sounds/tom-2.mp3")
                  tom2.play();
                  break;
            case "d":
                  var tom3 = new Audio("sounds/tom-3.mp3")
                  tom3.play();
                  break;
            case "f":
                  var tom4 = new Audio("sounds/tom-4.mp3")
                  tom4.play();
                  break;
            case "g":
                  var crash = new Audio("sounds/crash.mp3")
                  crash.play();
                  break;
            case "h":
                  var kickBass = new Audio("sounds/kick-bass.mp3")
                  kickBass.play();
                  break;
            case "j":
                  var snare = new Audio("sounds/snare.mp3")
                  snare.play();
                  break;
            default:
                  console.log("wrong key !");
      }
}

function animations(currentkey) {
      let activeButton = document.querySelector("." + currentkey);
      activeButton.classList.add("pressed", "red");
      setTimeout(() => {
            activeButton.classList.remove("pressed")

      }, 100);
}

// constructor functions (start with a capital letter)

// function BellBoy(name, age, languages) {
//       this.name = name;
//       this.age = age;
//       this.languages = languages;
//       this.moveSuitcase = function () {          //add method
//             alert("can i move your luggage ?")
//       }
// }

// making objects

// let bellboy1 = new BellBoy("tim", 29, ["hindi", "english"])
// console.log(bellboy1.languages[0])
// bellboy1.moveSuitcase();
