let timerInterval;
let isRunning = false;
let isWorkTime = true;
let workMinutes = 25;
let breakMinutes = 5;
let totalSeconds = workMinutes * 60;

const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const settingsBtn = document.getElementById('settingsBtn');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const currentTimeDisplay = document.getElementById('currentTime');
const currentPeriodDisplay = document.getElementById('currentPeriod');
const motivationDisplay = document.getElementById('motivation');
const settingsModal = document.getElementById('settingsModal');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');
const workTimeInput = document.getElementById('workTime');
const breakTimeInput = document.getElementById('breakTime');
const watcher = document.getElementById('watcher');
const notificationSound = document.getElementById('notificationSound');
const rainSound = document.getElementById('rainSound');
const rainToggle = document.getElementById('rainToggle');

let isRainPlaying = false;

function updateDisplay() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    minutesDisplay.textContent = String(mins).padStart(2, '0');
    secondsDisplay.textContent = String(secs).padStart(2, '0');
}

