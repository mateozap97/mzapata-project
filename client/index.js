window.addEventListener("keypress", function pressSpace(key){
  if (key.keyCode === 32) {
    window.location.href = "/mainmenu";
    resetGame();
    console.log(data);
  }
});

function resetGame (){
  fetch('/api/game/reset').then(function(response){
    if(response.status !== 200) {
      return;
    }
  })
}

sessionStorage.setItem("audio", "true");
sessionStorage.setItem("seconds", 0);