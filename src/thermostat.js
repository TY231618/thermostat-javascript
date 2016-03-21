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
  if (this.powerSavingMode === true) {
    this.powerSavingMode = false;
    this.MAX_TEMP = 32;
  }
  else {
    this.powerSavingMode = true;
    this.MAX_TEMP = 25;
  }
};

Thermostat.prototype.powerSavingStatus = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
  return this.temperature;
};

Thermostat.prototype.energyUsage = function () {

      if (this.temperature < 18) {
      return 'low-usage';
    }
    else if (this.temperature >= 25) {
      return 'high-usage';
    }
    else {
      return 'med-usage';
    }
};

Thermostat.prototype.converter = function (temp) {
  return (temp - 32) * 5 / 9;
};
