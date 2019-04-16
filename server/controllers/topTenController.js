var topTen = require('../models/topTen');


// getting the scores

exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentTopScores);
    //Ussed to be exports.currentTopScores
}

// saving the scores

exports.saveCurrentScores = function(req, res) {
	var saveScores = topTen.addScore(req.body.playerName, req.body.playerScore, req.body.playerDate);
	currentTopScores.push(saveScores);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentTopScores);
}

// deleting the scores

exports.deleteCurrentScores = function(req, res) {
	currentTopScores.splice(req.params.topTenId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentTopScores);
}

// updating the scores

exports.updateCurrentScores = function(req, res) {

	var updatedScores = currentTopScores[req.params.topTenId];


	console.log(req.body.playerName);
	if(req.body.playerName)
		updatedScores.playerName = req.body.playerName;
    console.log("working 1");
	if(req.body.playerScore)
		updatedScores.playerScore = req.body.playerScore;
    console.log("working 2");
	if(req.body.playerDate)
		updatedScores.playerDate = req.body.playerDate;
    console.log("working 3");


	currentTopScores[req.params.topTenId] = updatedScores;

	res.setHeader('Content-Type', 'application/json');
	res.send(currentTopScores[req.params.topTenId]);
}