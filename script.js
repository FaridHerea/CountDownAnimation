// Ch09_03
// var words = ['I', 'love', 'programming', 'with', 'JavaScript']
// var colors = [
//   [63, 184, 175],
//   [127, 199, 175],
//   [218, 216, 167],
//   [255, 158, 157],
//   [255, 61, 127]
// ];

// Ch09_02
// var size01 = 200;
// var size02 = 150;
// var size03 = 100;
// var size04 = 50;
// var size05 = 25;

// var sizes = [200, 150, 100, 50, 25, 10, 5]

// var sizes = [];

function setup() {
    createCanvas(800, 300);
    textAlign(CENTER, CENTER);
    frameRate(5);

// Ch09_03
//     textAlign(CENTER, CENTER);
//     frameRate(3);

// Ch09_02
//    for ( var i = 0; i < 100; i++) {
//      var randomValue = random(5, 200);
//      sizes.push(randomValue)
//    }
}
  
  function draw() {
    background(220);
    fill(255);
    textSize(45);
    countdown(10, 'Launch!', 2)

// Ch09_03
//     var currentIndex = frameCount % words.length;
//     var currentWord = words[currentIndex];
//     var currentColor = colors[currentIndex];

//     background(currentColor);

//     fill(255);
//     textSize(45);
//     text(currentWord, width / 2, height / 2);

// Ch09_02
//    background(220);
//    noFill();
//    strokeWeight(2);

//    for (var i = 0; i < sizes.length; i++) {
//      ellipse( width / 2,  height / 2 , sizes[i], sizes[i]);
//    }
}

countdown = (number, message, delay) => {
  var currentNumber = number - parseInt(frameCount / delay, 10);
  var currentMessage;
  currentNumber < 0 
    ? currentMessage = message
    : currentMessage = currentNumber;
  text(currentMessage, width / 2, height / 2)
};