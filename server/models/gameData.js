function gameData(currentPace, currentWeather, currentTerrain, messages) {

	var pace = require('../models/pace');
  	var weather = require('../models/weather');
  	var terrain = require('../models/terrain');

  	this.playerNames = ["", "", "", "", ""];
  	this.playerStatus = [true, true, true, true, true]
  	this.playerProfession = "";
  	this.playerMoney = 0;
  	this.startMonth = '';
  	this.milesTraveled = 0;
  	this.groupHealth = 100;
  	this.daysOnTrail = 0;
  	this.messages = [];
  	this.currentPace = {};
  	this.currentWeather = {};
  	this.currentTerrain = {};
}

exports.gameInfo = function (currentPace, currentWeather, currentTerrain, messages) {
	var gameStats = new gameData(currentPace, currentWeather, currentTerrain, messages);
	return gameStats;
}