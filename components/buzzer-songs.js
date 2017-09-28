var five = require('johnny-five');
var songs = require('j5-songs');
 
five.Board().on('ready', function () {
  var piezo = new five.Piezo(9);
  var song = songs.load('starwars-theme');
  
  piezo.play(song);
});