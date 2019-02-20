// global variables
pencolour = "rgb(0, 0, 0)";
var penthickness = 50;
var rgbToggled = false;

// event listeners
$(document).ready(function() {
  $(".colourpalette").click(function() {
    pencolour = $(this).css('background-color');
    ChangeColour(pencolour);
  });

  $('#thickness').change(function() {
    penthickness = int($(this).val());
    $("#pen-thickness").html($(this).val());
  });

  $("#rgb").on('click', function() {
    if (!rgbToggled) {
      setInterval(function () { generateRandomRGB(); }, 250);
      rgbToggled = true;
      $(this).css('background-color', 'light-grey');
      console.log($(this))
    }
    else {
      rgbToggled = false; 
      $(this).css('background-color', 'white');
      pencolour = "rgb(0, 0, 0)";     
    }
  });
});

// p5 js setup
function setup() {
  createCanvas(windowWidth, windowHeight).parent('sketch');
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, penthickness, penthickness);
    fill(pencolour);
  }
}

// helper functions
function ChangeColour(pencolour) {
  $("#current").css('background-color', pencolour);
  $("#current").css('border-color', pencolour);
}

function Reset() {
  background(255, 255, 255);
  pencolour = "rgb(0, 0, 0)";
  penthickness = 50;
  ChangeColour('black');
  $("#thickness").val('50');
  $("#pen-thickness").html('50');
}

function generateRandomRGB() {
  randomRGB = 
    "rgb(" 
    + Math.floor((Math.random() * 255) + 1) 
    + ", "
    + Math.floor((Math.random() * 255) + 1) 
    + ", " 
    + Math.floor((Math.random() * 255) + 1) 
    + ")";

  if (rgbToggled) {
      pencolour = randomRGB; 
  }
}
