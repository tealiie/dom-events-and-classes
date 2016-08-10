// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  evt.target.classList.remove('blue')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}

// CREATE FUNCTION hide HERE
// You might want to try toggling invisible, so that invisible dots can be made visible again? But that's your call. ;)
function hide (evt) {
  evt.target.classList.add('invisible')
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

  // I fixed this line. There was some weird hidden character in front of the console.log and the closing }
function counter () {
  console.log(document.getElementsByClassName('board')[0].children)
}


 for (var i = 0; i < dotArray.length; i++) {
   if (dotArray[i].classList.contains('blue') === true) {
     totals.blue += 1
   } else if
     (dotArray[i].classList.contains('green') === true) {
       totals.green += 1
     } else if (dotArray[i].classList.contains('invisible') === true) {
       totals.invisible += 1
   }
 }




  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
