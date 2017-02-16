const state = {
  clickTally: 0,
  color: "",
  quote: "",
  bunny: "#bunny-img"
}

const animation = {
  finish: "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  bounce: "animated bounce",
  bounceOutRight: "animated bounceOutRight",
  bounceInLeft: "animated bounceInLeft",
  zoomOutDown: "animated zoomOutDown",
  zoomInDown: "animated zoomInDown",
  bounceInDown: "animated bounceInDown",
  bounceOutDown: "animated bounceOutDown",
}

$(document).ready(function() {
  $("#btn").on("click", function() {
    // state.clickTally = state.clickTally + 1
    // let prevColor = state.color
    // let newColor = pickColor(state.clickTally)
    // let newQuote = pickQuote(state.clickTally)
    bounceBunny(state.bunny)
    // changeColor(prevColor, newColor)
    // changeQuote(newQuote)
    // logColor(newColor)
  });
});

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

// Change the background color based on the class returned by pickColor function
function changeColor(prevColor, newColor) {
  $(".main-box").removeClass(prevColor)
  $(".main-box").addClass(newColor)
}

// Change the quote based on the quote returned by pickQuote function
function changeQuote(newQuote) {
  $(".quote-text").html(newQuote)
}

// Make the bunny bounce
function bounceBunny(bunny) {
  $(bunny).addClass(animation.bounceOutDown).one(animation.finish, function() {
    $(this).removeClass(animation.bounceOutDown)
    state.clickTally = state.clickTally + 1
    let prevColor = state.color
    let newColor = pickColor(state.clickTally)
    let newQuote = pickQuote(state.clickTally)
    changeColor(prevColor, newColor)
    changeQuote(newQuote)
    logColor(newColor)
    $(bunny).addClass(animation.bounceInDown).one(animation.finish, function() {
      $(this).removeClass(animation.bounceInDown)
    })
  })
}

// Make bunny exit

// // Make the bunny exit
// function exitBunny(bunny) {
//   $(bunny).addClass("animated slideOutRight")
// }

// Make the bunny bounce
// function bounceBunny(bunny) {
//   let originalBunny = $(bunny)
//   let cloneBunny = originalBunny.clone(true)
//   originalBunny.before(cloneBunny)
//   originalBunny.remove()
// }
