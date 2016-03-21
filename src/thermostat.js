 function Thermostat() {

  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 32;

}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;

};

Thermostat.prototype.up = function () {
  if (this.temperature < this.MAX_TEMP) {
    this.temperature += 1;
  }
  else {
    return "I ain't about to fry bitch";
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
