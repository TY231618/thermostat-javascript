 function Thermostat() {

  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;

};

Thermostat.prototype.up = function () {
  if (this.temperature < this.MAX_TEMP) {
    this.temperature += 1;
  }
  else {
    throw "I ain't about to fry bitch";
  }

};

Thermostat.prototype.down = function () {
  if (this.temperature > this.MIN_TEMP) {
    this.temperature -= 1;
  }
  else {
    return "Soz it's too cold for that shit";
  }

};

Thermostat.prototype.powerSavingSwitch = function() {
  return this.powerSavingMode != this.powerSavingMode;
};

Thermostat.prototype.powerSavingStatus = function () {
  return this.powerSavingMode;
};
