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
}

$(document).ready(function() {
  $("#btn").on("click", function() {
    // state.clickTally = state.clickTally + 1
    // let prevColor = state.color
    // let newColor = pickColor(state.clickTally)
    // let newQuote = pickQuote(state.clickTally)
    startAdventure()
    // changeColor(prevColor, newColor)
    // changeQuote(newQuote)
    // logColor(newColor)
  });
});

function startAdventure() {
  bunnyMove()

}


// Log the current background color for future use
function logColor (newColor) {
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

// Use clickTally to determine the bunny image
function pickImg(clickTally) {
  let newImg = "";
  let clickTallyLoopImg = clickTally % 10
  switch(clickTallyLoopImg) {
    case 0:
      newImg = "bunny.png"
      break;
    case 1:
      newImg = "bunny.png"
      break;
    case 2:
      newImg = "bunny.png"
      break;
    case 3:
      newImg = "bunny-mon.png"
      break;
    case 4:
      newImg = "bunny-bow.png"
      break;
    case 5:
      newImg = "bunny-nose.png"
      break;
    case 6:
      newImg = "bunny-hat.png"
      break;
    case 7:
      newImg = "bunny-coat.png"
      break;
    case 8:
      newImg = "bunny-coat.png"
      break;
    case 9:
      newImg = "bunny.png"
      break;
    default:
      newImg = "bunny.png"
      break;
  }
  return newImg;
}

// Check if it's time to reveal background images
function revealImgs () {
  if (state.clickTally === 8) {
    appear()
  }
}

// Make hidden background images appear
function appear() {
  for (var i = 0; i < 7; i++) {
    $("#hidden-img-" + i).removeClass("hidden").addClass("animated fadeIn")
  }
}

// Check if it's time to hide background images
function hideImgs () {
  if (state.clickTally === 9) {
    hide()
  }
}

// Hide background images
function hide() {
  for (var i = 0; i < 7; i++) {
    $("#hidden-img-" + i).removeClass("animated fadeIn").addClass("hidden")
  }
}

// Check if it's time to change the button
function changeBtn () {
  if (state.clickTally === 9) {
    $("#btn").removeClass("btn-1").addClass("btn-2").html("Time for tea")
  }
  else if (state.clickTally === 10) {
    $("#btn").removeClass("btn-2").addClass("btn-1").html("Down the rabbit hole!")
  }
}

// Change the background color based on the class returned by pickColor function
function changeColor(prevColor, newColor) {
  $(".main-box").removeClass(prevColor)
  $(".main-box").addClass(newColor)
}

// Change the quote based on the quote returned by pickQuote function
function changeQuote(newQuote) {
  $(".quote-text").html(newQuote)
}

// Change the imaged based on the quote returned by pickImg function
function changeImg(newImg) {
  $("#bunny-img").attr("src", newImg)
}

// Movement ***************************************************

// Define how the bunny will move
function bunnyMove(){
  if (state.clickTally === 9) {
    runBunny(state.bunny)
  }
  else {
    bounceBunny(state.bunny)
  }
}

// Bounce movement
function bounceBunny(bunny) {
  $(bunny).addClass(animation.bounceOutDown).one(animation.finish, function() {
    $(this).removeClass(animation.bounceOutDown)
    updateBackground()
    $(bunny).addClass(animation.bounceInDown).one(animation.finish, function() {
      $(this).removeClass(animation.bounceInDown)
    })
  })
}

// Running movement
function runBunny(bunny) {
  $(bunny).addClass(animation.bounceOutRight).one(animation.finish, function() {
    $(this).removeClass(animation.bounceOutRight)
    updateBackground()
    $(bunny).addClass(animation.bounceInLeft).one(animation.finish, function() {
      $(this).removeClass(animation.bounceInLeft)
    })
  })
}

// Update background
function updateBackground() {
  state.clickTally = state.clickTally + 1
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
  logColor(newColor)
}