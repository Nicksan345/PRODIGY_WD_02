let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let laps = document.getElementById("laps");
let interval = null;

function updateTime() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (interval === null) {
    interval = setInterval(updateTime, 1000);
  }
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  clearInterval(interval);
  interval = null;
  [seconds, minutes, hours] = [0, 0, 0];
  display.innerText = "00:00:00";
  laps.innerHTML = "";
}

function lap() {
  const li = document.createElement("li");
  li.innerText = display.innerText;
  laps.appendChild(li);
}
