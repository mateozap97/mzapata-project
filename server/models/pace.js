// add somthing to exports you can access other node
function gamePace(Name, Health, Mileage) {
	this.paceName = Name;
	this.paceHealth = Health;
	this.paceMileage = Mileage;     
	// = new date (inDate); makes sure when it passes the peramitor of the dates it comes out a date not a string
}

var allPaces = []; // the array that contains top ten scores at that time
	allPaces.push(new gamePace("Steady", 0, 20));
	allPaces.push(new gamePace("Strenuous", -3, 30));
	allPaces.push(new gamePace("Grueling", -8, 35));
	allPaces.push(new gamePace("Resting", +5, 0));

exports.paceOptions = function () {
	return (allPaces);
}

