$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });

  $('#powersaving-on').on('click', function() {
    thermostat.powerSavingSwitch();
    $('#temperature').text(thermostat.temperature);
  });
});
