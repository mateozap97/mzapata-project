function topScore(Name, Score, theDate) {
	this.playerName = Name;
	this.playerScore = Score;
	this.playerDate = theDate;    
	// = new date (inDate); makes sure when it passes the parameter of 
	the dates it comes out a date not a string
}

exports.addScore = function (Name, Score, theDate) {
	var score = new topScore(Name, Score, theDate);
	return score;
}