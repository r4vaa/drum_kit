var numberOfButtons = document.querySelectorAll(".drum").length;

for( var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        buttonInnerHtml = (this.innerHTML)
        makeSound(buttonInnerHtml);

        //what to do when click detected
        
    });

}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
})


function makeSound(key){

  switch (key) {
    case "w" :
      var tom1= new Audio('./sounds/tom-1.mp3'); 
          tom1.play();
        break;
        //tap into the audio hardware
        //check the file at fileloaction exists
        //check the file at fileloaction is a sound file
        //play the file at filelocation.
    case "a" :
      var tom2= new Audio('./sounds/tom-2.mp3');
          tom2.play();
       break;

    case "s" :
      var tom3= new Audio('./sounds/tom-3.mp3');
          tom3.play();
        break;

    case "d" :
       var tom4= new Audio('./sounds/tom-4.mp3');
          tom4.play();
        break;

    case "j" :
      var snare= new Audio('./sounds/snare.mp3');
          snare.play();
        break;

    case "k" :
      var crash= new Audio('./sounds/crash.mp3');
          crash.play();
        break;

    case "l" :
      var kick= new Audio('./sounds/kick-bass.mp3');
          kick.play();
        break;
    default:
        console.log("buttonInnerHtml");
}
}