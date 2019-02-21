// global variables
var hexR = 0;
var hexG = 0;
var hexB = 0;
var pencolour = "rgb(0, 0, 0)";
var penthickness = 50;

var rgbToggled = false;
var colourBeforeToggle = "";

// event listeners
$(document).ready(function() {
  $(".colourpalette").click(function() {
    ChangeColour($(this).css('background-color'));
  });

  $('#thickness').change(function() {
    penthickness = int($(this).val());
    $("#pen-thickness").html($(this).val());
  });

  $("#rgb").on('click', function() {
    if (!rgbToggled) {
      rgbToggled = true;
      colourBeforeToggle = pencolour;
    }
    else {
      rgbToggled = false; 
      ChangeColour(colourBeforeToggle);    
    }
  });

  $("#hexControls").on('change', function() {
    hexR = $("#hexR").val();    
    hexG = $("#hexG").val();
    hexB = $("#hexB").val();

    ChangeColour("rgb(" + hexR + ", " + hexG + ", " + hexB + ")");
  });
});

// p5 js setup
function setup() {
  createCanvas(windowWidth, windowHeight).parent('sketch');
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, penthickness, penthickness);
    fill(pencolour);
  }
}

// helper functions
function ChangeColour(newcolour) {
  pencolour = newcolour;
  $("#current").css('background-color', newcolour);
  $("#current").css('border-color', newcolour);
}

function Reset() {
  background(255, 255, 255);

  penthickness = 50;
  ChangeColour("rgb(0, 0, 0)");
  rgbToggled = false;

  $("#thickness").val('50');
  $("#pen-thickness").html('50');

  $("#hexR").val('0');    
  $("#hexG").val('0');
  $("#hexB").val('0');
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
      ChangeColour(randomRGB)
  }
}

setInterval(function () { generateRandomRGB(); }, 250);