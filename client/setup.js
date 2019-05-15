var stepCount = 0;



function getScreen (screenId){
  console.log(screenId);
  fetch('/api/setup/screen/' + screenId).then(function(response) {
    if (response.status !== 200) {
      console.log('pick setup screen' + response.status +"msg: " + response.value);
      return;
    }
    response.text().then(function (data) {
    // send the html returned back to the
    // cosole.log("recieved back: " + " data);
    gameContainer.innerHTML = data;
    if (screenId == 5){
      returnStats();
    }



    })
  });
}

getScreen(0);


window.addEventListener("keypress", pressProfession, false);
  function pressProfession(key){
    if( key.keyCode == "49"){
      if(stepCount == 0){
        saveProfession("Banker");
        stepCount++;
      }
    }
    else if( key.keyCode == "50"){
      if(stepCount == 0){
        saveProfession("Carpenter");
        stepCount++;
      }
    }
    else if( key.keyCode == "51"){
      if(stepCount == 0){
        saveProfession("Farmer");
        stepCount++;
      }
    }
  }





function saveProfession(profession) {

  fetch('/api/setup/profession/' + profession,
      {
        method: 'post',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: '{"profession": "' + profession + '"}'
      }).then(function(response) {
        if (response.status !== 200) {
          console.log('ok' + response.status +"msg: " + response.value);
          return;
        }
        else{
          getScreen(stepCount);
        }
        console.log("profession" + profession + " saved! ");
      });
}


function saveWagonLeader() {
  var name1 = document.getElementById("player0").value

  fetch('/api/setup/wagonLeader/' + name1,
      {
        method: 'post',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: '{"name1": "' + name1 + '"}'
      }).then(function(response) {
        if (response.status !== 200) {
          console.log('ok' + response.status +"msg: " + response.value);
          return;
        }
        else{
          stepCount++;
          getScreen(stepCount);
        }
        console.log("name1" + name1 + "is saved");
      });

}

function saveWagonMembers (){
  var name2 = document.getElementById("player1").value
  var name3 = document.getElementById("player2").value
  var name4 = document.getElementById("player3").value
  var name5 = document.getElementById("player4").value

  fetch('/api/setup/member/' + name2 + '/' + name3 + '/' + name4 + '/' + name5,
      {
        method: 'post',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(function(response) {
        if (response.status !== 200) {
          console.log('ok' + response.status +"msg: " + response.value);
          return;
        }
        else{
          stepCount++
          getScreen(stepCount);
        }
        console.log("wagon leader name saved");
      });
    }

function saveMonth (month){
  fetch('/api/setup/month/' + month,
      {
        method: 'post',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: '{"month": "' + month + '"}'
      }).then(function(response) {
        if (response.status !== 200) {
          console.log('ok' + response.status +"msg: " + response.value);
          return;
        }
        else{
          getScreen(4);
          returnStats();
        }
        console.log("month" + month + " saved! ");
      });
}

window.addEventListener("keypress", pickMonth, false);

function pickMonth(key){
  if( key.keyCode == "49"){
    if(stepCount == 3){
      saveMonth("March");
      stepCount++;
    }
  }

  else if (key.keyCode == "50"){
    if(stepCount == 3){
      saveMonth("April");
      stepCount++;
  }
}
else if( key.keyCode == "51"){
  if(stepCount == 3){
    saveMonth("May");
    stepCount++;
  }
}
else if( key.keyCode == "52"){
  if(stepCount == 3){
    saveMonth("June");
    stepCount++;
  }
}
else if( key.keyCode == "53"){
  if(stepCount == 3){
    saveMonth("July");
    stepCount++;
    }
  }
else if (key.keyCode == "32"){
  console.log(stepCount)
  if(stepCount == 5){
    window.location.href = "/trail"
      }
    }
}

var returnStats = function (){
  stepCount++;
  fetch ('/api/game/data/')
  .then(function(response) {
    if (response.status !== 200) {
      return;
}

response.json().then(function(data) {
  console.log(data);
  document.getElementById('rProfession').innerHTML = "<p> Your Profession: </p>" + data.playerProfession;
  document.getElementById('rMoney').innerHTML = "<p> Bank Account: </p>" + data.playerMoney;
  document.getElementById('rPlayer1Name').innerHTML = "<p> Wagon Leader: </p>" + data.playerNames[0];
  document.getElementById('rPlayer2Name').innerHTML = "<p> Wagon Member 1: </p>" + data.playerNames[1];
  document.getElementById('rPlayer3Name').innerHTML = "<p> Wagon Member 2: </p>" + data.playerNames[2];
  document.getElementById('rPlayer4Name').innerHTML = "<p> Wagon Member 3: </p>" + data.playerNames[3];
  document.getElementById('rPlayer5Name').innerHTML = "<p> Wagon Member 4: </p>" + data.playerNames[4];
  // document.getElementById('returnData').innerHTML = "<u> Wagon Members: </u>" + "<br>" + data.playerNames[1]
  // + "<br>" + data.playerNames[2] + "<br>" + data.playerNames[3] + "<br>" + data.playerNames[4]+ "<br>";
  document.getElementById('rMonth').innerHTML = "<p> Start Month: </p>" + data.startMonth;
    })
  })
}
