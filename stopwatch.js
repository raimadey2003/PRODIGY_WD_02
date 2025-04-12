let startTime;
let running = false;
let elapsedTime = 0;
let timerInterval;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 60000) % 60);
  const hours = Math.floor((time / 3600000));

  document.getElementById('display').textContent =
    `${String(hours).padStart(2, '0')}:` +
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}`;
}

function startStop() {
  if (!running) {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 1000);
    running = true;
  }
}

function pause() {
  if (running) {
    elapsedTime += Date.now() - startTime;
    clearInterval(timerInterval);
    running = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
  elapsedTime = 0;
  running = false;
}

function lap() {
  if (running) {
    const lapTime = document.getElementById('display').textContent;
    const li = document.createElement('li');
    li.textContent = `Lap: ${lapTime}`;
    document.getElementById('laps').appendChild(li);
  }
}

