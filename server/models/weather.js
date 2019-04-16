function gameWeather(Id, Name, Health, Miles, Probability) {
	this.weatherIdentification = Id;
	this.weatherName = Name;
	this.weatherHealth = Health;
	this.weatherMiles = Miles;
	this.weatherProbability = Probability;    
	// = new date (inDate); makes sure when it passes the peramitor of the dates it comes out a date not a string
}

exports.weatherOptions = function (Id, Name, Health, Miles, Probability) {
	var weather = new gameWeather(Id, Name, Health, Miles, Probability);
	return weather;
}