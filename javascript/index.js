const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  const chronoSec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  const chronoSecDec = chronoSec.charAt(0)
  const chronoSecUni = chronoSec.charAt(1)
  
  secDec.innerText = chronoSecDec
  secUni.innerText = chronoSecUni
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.className.includes('start')){
    btnLeft.setAttribute('class', 'btn stop')
    btnLeft.innerText = 'STOP'

    btnRight.setAttribute('class', 'btn split')
    btnRight.innerText = 'SPLIT'

    chronometer.startClick()
    printTime()
    

  } else {
    btnLeft.setAttribute('class', 'btn start')
    btnLeft.innerText = 'START'

    btnRight.setAttribute('class', 'btn reset')
    btnRight.innerText = 'RESET'

    chronometer.stopClick()
    
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});

printTime()

