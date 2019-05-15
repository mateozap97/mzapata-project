var trailStats = function (){
  fetch('/api/game/data')
  .then(function(response){
    if(response.status !== 200) {
      console.log('Issue! status:' + response.status);
      return;
    }

    response.json().then(function(data) {
      console.log(data);
      var wagon= data.milesTraveled / 5;
      //document.getElementById('PICTURE of wagon').style.right = wagon + "%";


      document.getElementById('field').innerHTML = data.currentTerrain.terrainImage;

      document.getElementById('days').innerHTML = data.daysOnTrail;
      document.getElementById('money').innerHTML = data.playerMoney;
      document.getElementById('profession').innerHTML = data.playerProfession;
      document.getElementById('miles').innerHTML = data.milesTraveled;
      document.getElementById('weather').innerHTML = data.currentWeather.weatherName;
      document.getElementById('health').innerHTML = data.groupHealth;
      document.getElementById('pace').innerHTML = data.currentPace.paceName;
      document.getElementById('terrain').innerHTML = data.currentTerrain.terrainName;
      document.getElementById('members').innerHTML = data.playerStatus;
    })
  })
}

function nextDay(){
  fetch('/api/game/updateGame')
  .then(function(response) {
    if (response.status !== 200) {
      return;
    }
    response.json().then(function(data){

    });
  });
}

function changePace(id){
  fetch('/api/pace/' + id,
  {
    method: 'post',
    headers:
    {
      "Content-type": "application/json; charset=UTF-8"
    },
  }).then(function(response) {
    if (response.status !== 200) {
      console.log('ok' + response.status +"msg: ");
      return;
  }
  response.json().then(function(data){
    document.getElementById('pace').innerHtml = data.name
    });
  });
}


var audio = new Audio();
audio.src= "/music/The Oregon Trail.mp3";
audio.loop = true;
audio.play();

window.addEventListener("keydown", userPaceChange, false);

function userPaceChange(key){
  if( key.keyCode == "8"){
    window.location.href = "/mainmenu"
    }
    else if (key.keyCode == "49"){
    changePace(0);
    }
    else if (key.keyCode == "50"){
    changePace(1);
    }
    else if (key.keyCode == "51"){
    changePace(2);
    }
    else if (key.keyCode == "52"){
    changePace(3);
    }
    else if (key.keyCode == "32"){
    nextDay();
    trailStats();
    }
}