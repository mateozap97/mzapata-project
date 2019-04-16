// use require to import other js files
var topTen2 = require('../models/topTen');
var pace = require('../models/pace');
var weather = require('../models/weather');
var terrain = require('../models/terrain');
var gameData = require('../models/gameData');
var gameStats = gameData.gameInfo({}, {}, {}, " ");
//var gameChange = setup.createGameObject();

// PACE





// GET PACE

exports.getCurrentPaces = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(gameStats.currentPace);
  }



  defaultPace = function (){
    return currentPace1;
  }

// UPDATE PACE


// WEATHER

var currentWeather = []; // the array that contains top ten scores at that time
	currentWeather1 = weather.weatherOptions(1, "Very Hot", -8, .7, .1);
	currentWeather2 = weather.weatherOptions(2, "Hot", -3, .9, .1);
	currentWeather3 = weather.weatherOptions(3, "Warm", +1, 1, .2);
	currentWeather4 = weather.weatherOptions(4, "Cool", +1, .95, .1);
	currentWeather5 = weather.weatherOptions(5, "Cold", -5, .8, .1);
	currentWeather6 = weather.weatherOptions(6, "Very Cold", -12, .7, .1);
	currentWeather7 = weather.weatherOptions(7, "Rain", -4, .6, .1);
	currentWeather8 = weather.weatherOptions(8, "Heavy Rain", -8, .4, .05);
	currentWeather9 = weather.weatherOptions(9, "Snow", -15, .3, .05);
	currentWeather10 = weather.weatherOptions(10, "Blizzard", -30, .1, .05);
	currentWeather11 = weather.weatherOptions(11, "Heavy Fog", -3, .5, .05);

	currentWeather.push(currentWeather1);
	currentWeather.push(currentWeather2);
	currentWeather.push(currentWeather3);
	currentWeather.push(currentWeather4);
	currentWeather.push(currentWeather5);
	currentWeather.push(currentWeather6);
	currentWeather.push(currentWeather7);
	currentWeather.push(currentWeather8);
	currentWeather.push(currentWeather9);
	currentWeather.push(currentWeather10);
	currentWeather.push(currentWeather11);

// exports.currentWeather.push(weather.weatherOptions(1, "Very Hot", -8, .7, .1));

weightedWeather = function (){
    var weights =[];

  for (var i=0; i<100;i++){
    if(i<10){
        weights[i]=currentWeather1;
        //gameStats.milesTraveled *= .7;
    }
    else if(i>=10 && i<=19){
      weights[i]=currentWeather2
      //gameStats.milesTraveled *= .9;
    }
    else if(i>=19 && i<=39){
      weights[i]=currentWeather3
    }
    else if(i>=39 && i<=49){
      weights[i]=currentWeather4
      //gameStats.milesTraveled *= .95;
    }
    else if(i>=49 && i<=59){
      weights[i]=currentWeather5
      //gameStats.milesTraveled *= .8;
    }
    else if(i>=59 && i<=69){
      weights[i]=currentWeather6
      //gameStats.milesTraveled *= .7;
    }
    else if(i>=69 && i<=79){
      weights[i]=currentWeather7
      //gameStats.milesTraveled *= .6;
    }
    else if(i>=79 && i<=84){
      weights[i]=currentWeather8
      //gameStats.milesTraveled *= .4;
    }
    else if(i>=84 && i<=89){
      weights[i]=currentWeather9
      //gameStats.milesTraveled *= .3;
    }
    else if(i>=89 && i<=94){
      weights[i]=currentWeather10
      //gameStats.milesTraveled *= .1;
    }
    else if(i>=94 && i<=99){
      weights[i]=currentWeather11
      //gameStats.milesTraveled *= .5;
    }
  }
  var random = Math.floor(Math.random() * 100);
  return weights[random];
}

// GET WEATHER

exports.getCurrentWeathers = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(weightedWeather());
}

// TERRAIN

var currentTerrain = []; // the array that contains top ten scores at that time
	currentTerrain1 = terrain.terrainOptions("Mountains", "/images/mountain.gif", -5);
	currentTerrain2 = terrain.terrainOptions("Grassland", "/images/field.gif", +5);
	currentTerrain3 = terrain.terrainOptions("Plains", "/images/greatplains.jpg", +5);
	currentTerrain4 = terrain.terrainOptions("Forrest", "", 0);
	currentTerrain5 = terrain.terrainOptions("Mountains", "/images/mountain.gif", -5);

	currentTerrain.push(currentTerrain1);
	currentTerrain.push(currentTerrain2);
	currentTerrain.push(currentTerrain3);
	currentTerrain.push(currentTerrain4);
	currentTerrain.push(currentTerrain5);

// exports.currentTerrain.push(terrain.terrainOptions("Mountains", "mountain.gif", -5));

function weightedTerrains (){
    var terrainWeights =[];
  for (var i=0; i<100;i++){
    if(i<19){
      terrainWeights[i]=currentTerrain1;
      //gameStats.milesTraveled -= 5
    }
    else if(i>=19 && i<=39){
      terrainWeights[i]=currentTerrain2
      //gameStats.milesTraveled += 5
    }
    else if(i>=39 && i<=59){
      terrainWeights[i]=currentTerrain3
      //gameStats.milesTraveled += 5
    }
    else if(i>=59 && i<=79){
      terrainWeights[i]=currentTerrain4
    }
    else if(i>=79 && i<=99){
      terrainWeights[i]=currentTerrain5
      //gameStats.milesTraveled += -5
    }

  }
  var randomTerrain = Math.floor(Math.random() * 100);
  return terrainWeights[randomTerrain];

}

exports.getCurrentTerrains = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentTerrain);
}

// ONLY APIS NEEDED IS NEXT DAY RESET GAME AND CHANGE PACE


exports.getGameData = function(req, res) {
    //console.log(gameData)
    res.setHeader('Content-Type', 'application/json');
    res.send(gameStats);
    return(gameStats);
}

exports.getData = function (){
  return gameStats;
}

exports.updateGameData = function(req, res) {
    //console.log(gameStats)



    if(gameStats.groupHealth >= 20 && gameStats.groupHealth <50) {
      for (var i = 0; i < gameStats.playerStatus.length; i++){
        var random = Math.floor(Math.random() * 100 + 1);
        if (random <= 3){
          gameStats.playerStatus[i] = false;
          gameStats.messages.push(gameStats.playerNames[i] + "has died")
        }
      }

    }
    else if(gameStats.groupHealth >= 0 && gameStats.groupHealth < 20){
      for (var i = 0; i < gameStats.playerStatus.length; i++){
        var random = Math.floor(Math.random() * 100 + 1);
        if (random <= 10){
          gameStats.playerStatus[i] = false;
          gameStats.messages.push(gameStats.playerNames[i] + "has died")
    }
    else if(gameStats.groupHealth <= 0){
      for (var i = 0; i < gameStats.playerStatus.length; i++) {
        gameStats.playerStatus[i] = false;
          }
          gameStats.messages.push("all players have died")
        }
      }
    }
    updateHealth();
    gameStats.milesTraveled += updateMiles();
    gameStats.daysOnTrail++;
    //gameStats.playerProfession = pickProfession();
    gameStats.currentWeather = weightedWeather();
    gameStats.currentTerrain = weightedTerrains();
    //gameStats.startMonth =
    res.setHeader('Content-Type', 'application/json');
    res.send(gameStats)
  }


function updateHealth (){

// weather health effect

  if (gameStats.currentWeather == currentWeather1) {
    gameStats.groupHealth -= 8 }
  else if (gameStats.currentWeather == currentWeather2){
    gameStats.groupHealth -= 3 }
  else if (gameStats.currentWeather == currentWeather3){
    gameStats.groupHealth += 1 }
  else if (gameStats.currentWeather == currentWeather4){
    gameStats.groupHealth += 1 }
  else if (gameStats.currentWeather == currentWeather5){
    gameStats.groupHealth -= 5 }
  else if (gameStats.currentWeather == currentWeather6){
    gameStats.groupHealth -= 12 }
  else if (gameStats.currentWeather == currentWeather7){
    gameStats.groupHealth -= 4 }
  else if (gameStats.currentWeather == currentWeather8){
    gameStats.groupHealth -= 8 }
  else if (gameStats.currentWeather == currentWeather9){
    gameStats.groupHealth -= 15 }
  else if (gameStats.currentWeather == currentWeather10){
    gameStats.groupHealth -= 30 }
  else if (gameStats.currentWeather == currentWeather11){
    gameStats.groupHealth -= 3 }


    gameStats.groupHealth += gameStats.currentPace.paceHealth;


}


exports.pickProfession = function(req, res){
  gameStats.playerProfession = req.params.profession;
      if (gameStats.playerProfession == "Banker"){
        gameStats.playerMoney = 2000;
      }
      else if (gameStats.playerProfession == "Carpenter"){
        gameStats.playerMoney = 1800;
      }
      else if (gameStats.playerProfession == "Farmer"){
        gameStats.playerMoney = 1500;
      }
      res.setHeader('Content-Type', 'text/plain');
      res.send(gameStats.playerProfession);
    }


exports.setMembers = function(req, res){
    gameStats.playerNames[1] = req.params.name2;
    gameStats.playerNames[2] = req.params.name3;
    gameStats.playerNames[3] = req.params.name4;
    gameStats.playerNames[4] = req.params.name5;
    res.setHeader('Content-Type', 'text/plain');
    res.send(gameStats.playerNames);
  }


exports.setLeader = function(req, res){
    gameStats.playerNames[0] = req.params.name1;
    res.setHeader('Content-Type', 'text/plain');
    res.send(gameStats.playerNames);
  }

exports.setMonth = function (req,res) {
  gameStats.startMonth = req.params.startMonth;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameStats.startMonth);
}

exports.setPace = function (req, res) {
  var allPaces = pace.paceOptions();
  gameStats.currentPace = allPaces[req.params.paceid];
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameStats.currentPace);
}


    function updateMiles (){
      console.log(gameStats.currentPace.paceMileage);
        gameStats.milesTraveled += (gameStats.currentPace.paceMileage + gameStats.currentTerrain.terrainMilesEffect) * gameStats.currentWeather.weatherMiles ;
    }

//MileChange
getMileChange = function() {
  return gameStats.currentPace.miles + currentGameData.currentWeather.weatherMiles
}



var setup = require ('../controllers/setupController');


exports.resetGame = function(req, res) {
  gameStats = gameData.gameInfo();
  // gameStats.startMonth = setMonth();
  gameStats.currentWeather = weightedWeather();
  gameStats.currentTerrain = weightedTerrains();
  gameStats.currentPace = changePace(0);
  // gameStats.playerProfession = setProfession();
  res.setHeader('Content-Type', 'application/json');
  res.send(gameStats);

}