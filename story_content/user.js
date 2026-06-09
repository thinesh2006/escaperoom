window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script23 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script24 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script25 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script26 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script27 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(0);
}

window.Script28 = function()
{
  let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();

// Putting it together
let dateString = month + "/" + day + "/" + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
player.SetVar("month", month);
}

window.Script29 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script30 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script31 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script32 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script33 = function()
{
  var confettiScript = document.createElement('script');
confettiScript.setAttribute('src','https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js');
document.head.appendChild(confettiScript);
}

window.Script34 = function()
{
  function stopTimer() {
    if (typeof window.timerInterval !== 'undefined') {
        clearInterval(window.timerInterval);
        delete window.timerInterval;
    }
}
stopTimer();
}

window.Script35 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);
}

window.Script36 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(0);
}

window.Script37 = function()
{
  var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}

window.Script38 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script39 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script40 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script41 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script42 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script43 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SlTimer");
var totalTimeInSeconds = totalMinutes * 60;
if (typeof window.timerInterval === 'undefined') {
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds--;
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }
    startCountdown();
}
}

window.Script44 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(0);
}

window.Script45 = function()
{
  let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();

// Putting it together
let dateString = month + "/" + day + "/" + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
player.SetVar("month", month);
}

};
