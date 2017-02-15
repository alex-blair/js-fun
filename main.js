const state = {
  clickTally: 0,
  color: "",
  bunny: "#bunny-img"
}

$(document).ready(function() {
  $("#btn").click(function() {
    state.clickTally = state.clickTally + 1
    let prevColor = state.color
    let newColor = pickColor(state.clickTally)
    bounceBunny(state.bunny)
    changeColor(prevColor, newColor)
    logColor(newColor)
  });
});

// Log the current background color for future use
function logColor (newColor) {
  state.color = newColor
}

// Use clickTally to determine the background color
function pickColor(clickTally) {
  let newColor = "";
  const clickTallyLoopCounter = clickTally % 10
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

// Make the bunny bounce
function bounceBunny(bunny) {
  let originalBunny = $(bunny)
  let cloneBunny = originalBunny.clone(true)
  originalBunny.before(cloneBunny)
  originalBunny.remove()
}
