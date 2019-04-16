function gameTerrain(Name, Image, milesEffect) {
	this.terrainName = Name;
	this.terrainImage = Image;
	this.terrainMilesEffect = milesEffect;
}

exports.terrainOptions = function (Name, Image, milesEffect) {
	var terrain = new gameTerrain(Name, Image, milesEffect);
	return terrain;
}