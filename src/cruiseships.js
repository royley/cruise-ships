function Ship(startingPort){
    this.captain = "",
    this.noOfPassengersAboard = 0,
    this.startingPort = startingPort
}

Ship.prototype.boarding = function(passengersWaiting){
    this.noOfPassengersAboard += passengersWaiting;
}

Ship.prototype.assignCaptain = function(captainName){
    this.captain = captainName;
}



module.exports = Ship;