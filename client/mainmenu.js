window.addEventListener("keypress", function pressOne(key){
  if (key.keyCode == 49) {
    window.location.href = "/setup";
  }
});

// if user clicks 1 they go to trail

window.addEventListener("keypress", function pressThree(key){
  if (key.keyCode == 51) {
    window.location.href = "/topten";
  }
});

// if user clicks 3 they go to topten

window.addEventListener("keypress", function visualSoundOnOff(key){
  if (key.keyCode === 52) {
    var text = document.getElementById("audioText");
  }

    if (isSoundOn){
      toggleAudio();
      text.innerHTML = "4. Turn Sound (Off)"
    }

    else {
      toggleAudio();
      text.innerHTML = "4. Turn Sound (On)"
    }
});

// toggle audio on and off