var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(9);
  this.repl.inject({
    led: led
  });

  led.blink(300);
});