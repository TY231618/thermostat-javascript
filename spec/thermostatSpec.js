
describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases in temperature with the up button', function() {
   thermostat.up();
   expect(thermostat.getCurrentTemperature()).toEqual(21);
 });

  it('decreases in temperature with the down button', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a max of 25 degrees', function() {
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  describe('power saving mode', function() {
    it('defaults to on', function() {
      expect(thermostat.powerSavingMode).toBe(true);
  });

  describe('when on', function() {
    it('has max temperature of 25', function() {
      do {
        thermostat.up();
      }
      while (thermostat.temperature < 25);
      expect(function(){ thermostat.up(); }).toThrow("I ain't about to fry bitch");
    });
  });

    describe('when off', function() {
      it('switches back on', function() {
        thermostat.powerSavingSwitch();
        thermostat.powerSavingSwitch();
        expect(thermostat.powerSavingStatus()).toBe(true);
      });

      it('switch off power saving mode', function() {
        thermostat.powerSavingSwitch();
        expect(thermostat.powerSavingStatus()).toBe(false);
      });

      it('has max temperature of 32', function() {
        thermostat.powerSavingSwitch();
        do {
          thermostat.up();
        }
        while (thermostat.degrees < 32);
        expect(function(){ thermostat.up(); }).toThrowError('Temperature cannot exceed 32');
      });
    });
});

describe('reset button', function() {
  it('resets back to 20', function() {
    thermostat.up();
    expect(thermostat.resetButton()).toEqual(20);
  });
});

describe('energy usage', function() {
  it('green when usage is below 18', function() {
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });

  it('yellow when usage is between 18 and 25', function() {
    expect(thermostat.energyUsage()).toEqual('med-usage');
  });

  it('red when usage is above 25', function() {
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });

  describe('converter', function() {
    it('fahreheit to celsius', function() {
      expect(thermostat.converter(104)).toEqual(40);
    });
  });
});
