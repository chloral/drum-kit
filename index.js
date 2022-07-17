for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    
   
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var bt = this.innerHTML;
        makeSound(bt);
        buttonAnimation(bt);
    });
}

document.addEventListener("keydown", function(e){
        var bt = e.key;
        makeSound(bt);
        buttonAnimation(bt);
});


function makeSound(bt ){
    
    switch(bt){
        case "w":   
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":   
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":   
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":   
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":   
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":   
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":   
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log(bt)
    } 

}

function buttonAnimation(bt){
    document.querySelector("." + bt).classList.add("pressed");
    // delay(100);
    setTimeout(() => {
        document.querySelector("." + bt).classList.remove("pressed");    
    }, 170);
    
}


