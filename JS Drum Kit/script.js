window.addEventListener('keydown', function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //choose audio element which is corresponding to button which I press
    console.log(audio)
    if(!audio)return ; //stop function and return 
    audio.play();
    
})