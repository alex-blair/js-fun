// Define global variables ****************************************************

const state = {
  clickTally: 0,
  color: "",
  quote: "",
  bunny: "#bunny-img"
}

const animation = {
  finish: "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  bounce: "animated bounce",
  bounceInDown: "animated bounceInDown",
  bounceOutDown: "animated bounceOutDown",
  bounceInLeft: "animated bounceInLeft",
  bounceOutRight: "animated bounceOutRight",
  fadeOutUpBig: "animated fadeOutUpBig",
  fadeOutLeftBig: "animated fadeOutLeftBig",
  fadeIn: "animated fadeIn",
  pulse: "animated pulse",
  wobble: "animated wobble",
  swing: "animated swing"
}

// On click events ************************************************************

$(document).ready(function() {
  $("#btn").on("click", function () {
    bunnyMove()
  });
  $("#lt-div").click(function() {
    bunnyBigger()
  });
  $("#rt-div").click(function() {
    bunnySmaller()
  });
  $("#bunny-div").on("mouseover", bounce)
  $("#prop-div").on("mouseover", move)
  $("#prop-div").on("click", empty)
});


// Click Tally ****************************************************************
function updateTally() {
  state.clickTally = state.clickTally + 1
  console.log(state.clickTally)
}

// Background colour **********************************************************

// Log the current background color for future use
function updateColor (newColor) {
  state.color = newColor
}

// Use clickTally to determine the background color
function pickColor(clickTally) {
  let newColor = "";
  let clickTallyLoopCounter = clickTally % 10
  switch(clickTallyLoopCounter) {
    case 0:
      newColor = "color-1"
      break;
    case 1:
      newColor = "color-2"
      break;
    case 2:
      newColor = "color-3"
      break;
    case 3:
      newColor = "color-4"
      break;
    case 4:
      newColor = "color-5"
      break;
    case 5:
      newColor = "color-6"
      break;
    case 6:
      newColor = "color-7"
      break;
    case 7:
      newColor = "color-8"
      break;
    case 8:
      newColor = "color-9"
      break;
    case 9:
      newColor = "color-10"
      break;
    default:
      newColor = "color-0"
      break;
  }
  return newColor;
}

// Change the background color based on the class returned by pickColor function
function changeColor(prevColor, newColor) {
  $(".main-box").removeClass(prevColor)
  $(".main-box").addClass(newColor)
}

// Quote **********************************************************************

// Use clickTally to determine the quote
function pickQuote(clickTally) {
  let newQuote = "";
  let clickTallyLoopQuote = clickTally % 10
  switch(clickTallyLoopQuote) {
    case 0:
      newQuote = "Would you like an adventure now, or shall we have our tea first?"
      break;
    case 1:
      newQuote = "Down, down, down..."
      break;
    case 2:
      newQuote = "How brave they'll all think me at home!"
      break;
    case 3:
      newQuote = "Curiouser and curiouser!"
      break;
    case 4:
      newQuote = "Which way? Which way?"
      break;
    case 5:
      newQuote = "How queer everything is to-day!"
      break;
    case 6:
      newQuote = "Who in the world am I? Ah, that's the great puzzle!"
      break;
    case 7:
      newQuote = "It's no use going back to yesterday because I was a different bunny then."
      break;
    case 8:
      newQuote = "Quick, now!"
      break;
    case 9:
      newQuote = "That <em>was</em> a narrow escape!"
      break;
    default:
      newQuote = "Would you like an adventure now, or shall we have our tea first?"
      break;
  }
  return newQuote;
}

// Change the quote based on the quote returned by pickQuote function
function changeQuote(newQuote) {
  $(".quote-text").html(newQuote)
}

// Images *********************************************************************

// Use clickTally to determine the bunny image
function pickImg(clickTally) {
  let newImg = "";
  let clickTallyLoopImg = clickTally % 10
  switch(clickTallyLoopImg) {
    case 0:
      newImg = "images/bunny.png"
      break;
    case 1:
      newImg = "images/bunny.png"
      break;
    case 2:
      newImg = "images/bunny.png"
      break;
    case 3:
      newImg = "images/bunny-mon.png"
      break;
    case 4:
      newImg = "images/bunny-bow.png"
      break;
    case 5:
      newImg = "images/bunny-nose.png"
      break;
    case 6:
      newImg = "images/bunny-hat.png"
      break;
    case 7:
      newImg = "images/bunny-coat.png"
      break;
    case 8:
      newImg = "images/bunny-coat.png"
      break;
    case 9:
      newImg = "images/bunny.png"
      break;
    default:
      newImg = "images/bunny.png"
      break;
  }
  return newImg;
}

// Change the image based on the image returned by pickImg function
function changeImg(newImg) {
  $("#bunny-img").attr("src", newImg)
}

// Check if it's time to reveal background images
function revealImgs() {
  if (state.clickTally === 10 || state.clickTally === 20) {
    $("#prop").attr("src", "images/full-tea.png").removeClass("med-prop").addClass("small-prop")
    revealCup()
  }
  if (state.clickTally === 3 || state.clickTally === 13) {
    $("#prop").attr("src", "images/door.png").removeClass("med-prop").addClass("small-prop")
    revealDoor()
  }
  else if (state.clickTally === 8 || state.clickTally === 18) {
    revealSmiles()
  }
}

// Make hidden background images appear
function revealCup() {
  $("#prop").removeClass("small-prop hidden").addClass("med-prop")
}

function revealDoor() {
  $("#prop").removeClass("hidden")
}

function revealSmiles() {
  for (var i = 0; i < 7; i++) {
    $("#hidden-img-" + i).removeClass("hidden").addClass(animation.fadeIn).one(animation.finish, function() {
      $(this).removeClass(animation.fadeIn).addClass(animation.pulse)
    })
  }
}

// Check if it's time to hide background images
function hideImgs () {
  if (state.clickTally === 1 || state.clickTally === 11 || state.clickTally === 21) {
    hideCup()
  }
  if (state.clickTally === 4 || state.clickTally === 14) {
    hideDoor()
  }
  else if (state.clickTally === 9 || state.clickTally === 19) {
    hideSmiles()
  }
}

// Hide background images
function hideCup() {
  $("#prop").addClass("hidden")
}

function hideDoor() {
  $("#prop").addClass("hidden")
}

function hideSmiles() {
  for (var i = 0; i < 7; i++) {
    $("#hidden-img-" + i).removeClass("animated pulse").addClass("hidden")
  }
}

// Eat-me-drink-me ************************************************************

function addPotions() {
  $("#lt-div").html('<img id="img-lt" src="images/eat-me.png" alt=""/>')
  $("#rt-div").html('<img id="img-rt" src="images/drink-me.png" alt=""/>')
}

function removePotions(){
  $("#lt-div").html('')
  $("#rt-div").html('')
}

function bunnyBigger() {
  $("#bunny-img").addClass(animation.wobble).one(animation.finish, function() {
    if ($(this).hasClass("med-size")) {
        $(this).removeClass("wobble med-size").addClass("big-size")
        $("#img-lt").addClass("hidden")
    }
    else if ($(this).hasClass("small-size")) {
        $(this).removeClass("wobble small-size").addClass("double-big-size")
        $("#img-lt").addClass("hidden")
    }
    revealBtn()
  })
}

function bunnySmaller() {
  $("#bunny-img").addClass(animation.wobble).one(animation.finish, function() {
    if ($(this).hasClass("med-size")) {
        $(this).removeClass("wobble med-size").addClass("small-size")
    }
    else if ($(this).hasClass("big-size")) {
        $(this).removeClass("wobble big-size").addClass("small-size")
    }
    else if ($(this).hasClass("double-big-size")) {
        $(this).removeClass("wobble double-big-size").addClass("small-size")
    }
    revealBtn()
  })
}

function revealBtn() {
  if ($("#bunny-img").hasClass("small-size")) {
    $("#btn").removeClass("hidden")
  }
  if ($("#bunny-img").hasClass("double-big-size")) {
    $("#btn").addClass("hidden")
  }
}

// Return bunny to normal size when it levels eat-me-drink-me area
function normalSize() {
  if ($("#bunny-img").hasClass("small-size")) {
    $("#bunny-img").removeClass("small-size").addClass("med-size")
  }
}

// Buttons ********************************************************************

// Change the style of the button
function changeBtn () {
  if (state.clickTally === 3 || state.clickTally === 13) {
    $("#btn").removeClass("btn-1").addClass("btn-3 hidden").html("Through the door!")
    addPotions()
  }
  else if (state.clickTally === 4 || state.clickTally === 14) {
    $("#btn").removeClass("btn-3").addClass("btn-1").html("Down the rabbit hole!")
    removePotions()
    normalSize()
  }
  else if (state.clickTally === 9 || state.clickTally === 19) {
    $("#btn").removeClass("btn-1").addClass("btn-2").html("Time for tea")
  }
  else if (state.clickTally === 10 || state.clickTally === 20) {
    $("#btn").removeClass("btn-2").addClass("btn-1").html("Down the rabbit hole!")
  }
}

// Animation ******************************************************************

// Define how the bunny will move
function bunnyMove(){
  if (state.clickTally === 3 || state.clickTally === 9 || state.clickTally === 13 || state.clickTally === 19) {
    runBunny(state.bunny)
  }
  else {
    bounceBunny(state.bunny)
  }
}

// Stationary bounce
function bounce() {
  $("#bunny-img").addClass(animation.bounce).one(animation.finish, function() {
    $("#bunny-img").removeClass(animation.bounce)
  })
}

// Bounce movement
function bounceBunny(bunny) {
  $("#btn").attr("disabled", true)
  $(bunny).addClass(animation.bounceOutDown).one(animation.finish, function() {
    $(this).removeClass(animation.bounceOutDown)
    leafFall()
    updateBackground()
    $(bunny).addClass(animation.bounceInDown).one(animation.finish, function() {
      $(this).removeClass(animation.bounceInDown)
      $("#btn").attr("disabled", false)
    })
  })
}

// Running movement
function runBunny(bunny) {
  $("#btn").attr("disabled")
  $(bunny).addClass(animation.bounceOutRight).one(animation.finish, function() {
    $(this).removeClass(animation.bounceOutRight)
    leafMove()
    updateBackground()
    $(bunny).addClass(animation.bounceInLeft).one(animation.finish, function() {
      $(this).removeClass(animation.bounceInLeft)
      $("#btn").removeAttr("disabled")
    })
  })
}

// Leaf movement
function leafMove () {
  if (state.clickTally === 9 || state.clickTally === 19) {
    leafLeft()
  }
  else {
    leafFall()
  }
}

function leafLeft() {
  $("#leaf-lt").removeClass("hidden").addClass(animation.fadeOutLeftBig).one(animation.finish, function() {
    $(this).removeClass(animation.fadeOutLeftBig).addClass("hidden")
  })
}

function leafFall() {
  $(".leaf").removeClass("hidden").addClass(animation.fadeOutUpBig).one(animation.finish, function() {
    $(this).removeClass(animation.fadeOutUpBig).addClass("hidden")
  })
}

// Teacup animations

// Empty
function empty() {
  if ($("#prop").hasClass("med-size")) {
    $("#prop").attr("src", "images/empty-tea.png")
  }
}

// Move the teacup
function move() {
    $("#prop").addClass(animation.swing).one(animation.finish, function() {
      $("#prop").removeClass(animation.swing)
  })
}

// Update background **********************************************************

function updateBackground() {
  updateTally()
  let prevColor = state.color
  let newColor = pickColor(state.clickTally)
  let newQuote = pickQuote(state.clickTally)
  let newImg = pickImg(state.clickTally)
  changeBtn()
  hideImgs()
  changeColor(prevColor, newColor)
  changeQuote(newQuote)
  changeImg(newImg)
  revealImgs()
  updateColor(newColor)
}
