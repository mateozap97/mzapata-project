window.addEventListener("keypress", function pressSpace(key){
  if (key.keyCode === 32) {
    window.location.href = "/mainmenu";
  }
});

topScores = []

fetch ("api/topTen2") .then(
  function (response){
    response.text().then(function(currentTopScores){
        console.log('success' + currentTopScores);
        topScores = currentTopScores;
    })

})

function topScore (name, score, date){
  this.playerName = name;
  this.playerScore = score;
  this.playerDate = date;
}


window.addEventListener('load', function(){
  var topTenList = document.getElementById('topTen');
  for(el in topScores){
    topTenList.innerHTML += "Player Name" + topScores[el].playerName + "<br />";
    topTenList.innerHTML += "Player Score" + topScores[el].playerScore + "<br />";
    topTenList.innerHTML += "Player Date" + topScores[el].playerDate + "<br />";
  }
});