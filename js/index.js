var numberOfDrum = document.querySelectorAll(".drum").length; //.drum length is 7

for (var i = 0; i < numberOfDrum; i++) { //max value of numberOfDrum is 7 but i will be 6 becuase i value is less than numberOfDrum  

      document.querySelectorAll(".drum")[i].addEventListener("click", function () {  // .drum[0,1,2,3,4,5,6]

            var buttonInnerHTML = this.innerHTML;  //drum[0] = w innerHTML = w innerHTML help to type the content in that container
            makeEvent(buttonInnerHTML); // makeEvent(w) 
            buttonAnimation(buttonInnerHTML); //buttonAnimation(w)

      });
}

document.addEventListener("keypress", function (event) {  //there is a function with keypress in which if we will press any key than it will print that key example if we press 'w' , so afterall function will give output related to the keypress with the key we have pressed 

      makeEvent(event.key);  //we will target the key that user has pressed
      buttonAnimation(event.key); //same but we are giving animation in it

})

function makeEvent(key) { //function is same but parameter is different than also it can work if we declare on atleast one function ;

      switch (key) { //key =w 
            case "w": //this case will me targetted
                  var tom2 = new Audio("sounds/tom-2.mp3");
                  tom2.play();
                  break;

            case "a":
                  var kick = new Audio("sounds/kick-bass.mp3");
                  kick.play();
                  break;
            case "s":
                  var snare = new Audio("sounds/snare.mp3");
                  snare.play();
                  break;
            case "d":
                  var tom1 = new Audio("sounds/tom-1.mp3");
                  tom1.play();
                  break;
            case "j":
                  var crash = new Audio("sounds/crash.mp3");
                  crash.play();
                  break;
            case "k":
                  var tom3 = new Audio("sounds/tom-3.mp3");
                  tom3.play();
                  break;
            case "l":
                  var tom4 = new Audio("sounds/tom-4.mp3");
                  tom4.play();
                  break;
            default:
                  console.log(buttonInnerHTML);
      }


}

function buttonAnimation(currentKey) { //buttonAnimation(w) in this parameter is different but function name is same 
      var activeButton = document.querySelector("." + currentKey);  //made a variable which contain the querySelector for indentifying the class of key user pressed 
      activeButton.classList.add("pressed"); //added the class which is in the style.css for giving animation to the button 
      setTimeout(function(){
            activeButton.classList.remove("pressed");  // after 300 milisecond it will automatically remove the class list we have added before
      },300);  //300 milisecond

}

//we can use parameter everywhere if function is same  


