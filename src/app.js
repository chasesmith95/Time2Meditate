/**
 *
 */


var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');
var main = new UI.Window({
    backgroundColor: 'white',
    fullscreen: true,
  });
var guidedMeditation = [
    "Breath Meditation: Repeat 'Breathing In I am Breathing In, Breathing Out I am Breathing Out",
    "Loving Kindness: Repeat 'May I be happy, May I be healthy, May I be safe, May I be kind, May I live at Ease'",
    "Phrase Meditation: Choose a phrase (eg peace, OM), Repeat it on every exhale",
    "Passage Meditation: Memorize your favorite passage and meditate on it"
  ];
var meditations = [
    "Music is what feelings sound like -- Georgia Cates",
    "Sleep is the best meditation -- Dalai Lama",
    "Let yourself be drawn by the stronger pull of that which you truly love. -- Rumi",
    "All good things are wild and free. -- Henry David Thoreau"
  ];
  //mediation
var meditation = new UI.TimeText({
    position: new Vector2(0, 0),
    size: new Vector2(144, 168),
    color: 'black',
    font: 'gothic-24',
    text: meditations[Math.floor(Math.random() * meditations.length)],
    textAlign: 'center',
    textOverflow:'wrap'
  });
  //time
var time = new UI.TimeText({
    position: new Vector2(0, 100),
    size: new Vector2(144, 168),
    color: 'black',
    font: 'bitham-42-bold',
    text: '%H:%M',
    textAlign: 'center',
    textOverflow:'wrap'
  });
  main.add(time);
  main.add(meditation);
  main.show();


main.on('click', 'down', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });

var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'images/om-symbol.png'
});
turnOff();
wind.add(image);
wind.show();
  
});
   

main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  meditate();
  var textfield = new UI.Text({
    position: new Vector2(0, 0),
    size: new Vector2(144, 30),
    font: 'gothic-14',
    textOverflow:'wrap',
    text: guidedMeditation[Math.floor(Math.random() * guidedMeditation.length)],
    textAlign: 'center'
  });
  //timer text field
  var timer = new UI.TimeText({
    position: new Vector2(0, 100),
    size: new Vector2(144, 168),
    font: 'bitham-42-bold',
    text: '%M:%S',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.add(timer);
  wind.show();
  
  wind.on('click', 'down', function(e) {
  var windEnd = new UI.Window({
    fullscreen: true,
    });

  var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'images/om-symbol.png'
  });
  turnOff();
  windEnd.add(image);
  windEnd.show();  
});
  
});



function turnOff() {
  ajax(
      {
        url: 'https://agent.electricimp.com/LTnFJFejhz_0/turnoff',
        type: 'json'
      },
      function(data, status, request) {
        console.log('Turning the light on');
      },
      function(error, status, request) {
        console.log('The ajax request failed: ' + error);
      }
    );
}


function meditate() {
  ajax(
      {
        url: 'https://agent.electricimp.com/LTnFJFejhz_0/meditate',
        type: 'json'
      },
      function(data, status, request) {
        console.log('Turning the light on');
      },
      function(error, status, request) {
        console.log('The ajax request failed: ' + error);
      }
    );
}
/*
function inspired() {
  ajax(
      {
        url: 'https://agent.electricimp.com/LTnFJFejhz_0/inspired',
        type: 'json'
      },
      function(data, status, request) {
        console.log('Turning the lights to inspired');
      },
      function(error, status, request) {
        console.log('The ajax request failed: ' + error);
      }
    );
}
*/

