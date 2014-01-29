function Player (props) {
	if (props !== undefined && props.username !== undefined) this.username = props.username;
}
Player.prototype.sayHi = function () {
	console.log("Hi! I am "+this.username);
}
Player.prototype.username = "Anonymouse";

//var p = require('./Player');
module.exports = Player;