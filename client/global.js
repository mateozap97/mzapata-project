var isSoundOn = sessionStorage.getItem("audio");
var audio = new Audio();
audio.src = "/music/The Oregon Trail.mp3";

// if (isSoundOn == "true") {
//   audio.currentTime = sessionStorage.getItem("seconds")
// }

function toggleAudio(){
  if (isSoundOn){
    sessionStorage.setItem("audio","false")
    audio.play();
    isSoundOn = false
  }
  else {
    sessionStorage.setItem("audio","true")
    audio.pause();
    isSoundOn = true;

  }
}

if (sessionStorage.getItem("audio") == "true") {
  audio.play();
}
  else {

  }