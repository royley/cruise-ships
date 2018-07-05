function Ship(currentPort){
    this.captain = "",
    this.noOfPassengersAboard = 0,
    this.currentPort = currentPort
}

Ship.prototype.boarding = function(passengersWaiting){
    this.noOfPassengersAboard += passengersWaiting;
}

Ship.prototype.assignCaptain = function(captainName){
    this.captain = captainName;
}

Ship.prototype.setSail = function(){
    this.currentPort = false
}

Ship.prototype.dock = function(port){
    this.currentPort = port
}

module.exports = Ship;