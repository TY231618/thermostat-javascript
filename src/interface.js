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
    $('#power-saving-status').text('Off');
  });

  $('#powersaving-off').on('click', function() {
    thermostat.powerSavingSwitch();
    $('#temperature').text(thermostat.temperature);
    $('#power-saving-status').text('On');
  });

  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var token = '&APPID=90139be1ac6909c91441c2f5b1c5896c&units=metric';
    $.get(url + city + token, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  });
});
