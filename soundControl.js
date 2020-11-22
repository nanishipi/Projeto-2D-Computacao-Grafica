let audio = document.querySelector("#myAudio");
let text = document.querySelector("#muteButton")
function muteSound(){
    if(audio.volume !== 0){
        audio.volume = 0
        text.innerHTML = "Unmute Sound"
    }
    else{
        audio.volume = 1
        text.innerHTML = "Mute Sound"
    }
}