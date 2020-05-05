// jshint esversion:6

// define the selectors
let increaseSession = document.querySelector(".session-up");
let reduceSession = document.querySelector(".session-down");
let sessionTime = document.querySelector(".session-set");
let increaseBreak = document.querySelector(".break-up");
let reduceBreak = document.querySelector(".break-down");
let breakTime = document.querySelector(".break-set");

// define the controllers
let playBtn = document.querySelector(".btn-play");
let pauseBtn = document.querySelector(".btn-pause");
let resetBtn = document.querySelector(".btn-reset");
let mainTimer = document.querySelector(".timer-display");
let currentDisplay = document.querySelector(".main-timer-heading");

// time variables
let workTime = parseInt(sessionTime.textContent) * 60;
let restTime = parseInt(breakTime.textContent) * 60;
let id = true;
mainTimer.innerHTML = `25:00`;

// increase and reduce the session time
increaseSession.addEventListener("click", () => {
	let time = parseInt(sessionTime.textContent);
	time++;
	sessionTime.innerHTML = time;
	if (time < 10) {
		sessionTime.innerHTML = `0${time}`;
	} else {
		sessionTime.innerHTML = `${time}`;
	}
	workTime = parseInt(sessionTime.textContent) * 60;
	mainTimer.innerHTML = `${sessionTime.textContent}:00`;
});

reduceSession.addEventListener("click", () => {
	let time = parseInt(sessionTime.textContent);
	if (time > 1) {
		time--;
		sessionTime.innerHTML = `${time}`;
	}
	if (time < 10) {
		sessionTime.innerHTML = `0${time}`;
	} else {
		sessionTime.innerHTML = `${time}`;
	}
	workTime = parseInt(sessionTime.textContent) * 60;
	mainTimer.innerHTML = `${sessionTime.textContent}:00`;
});

// increase and reduce the breaktime
increaseBreak.addEventListener("click", () => {
	let time = parseInt(breakTime.textContent);
	time++;
	breakTime.innerHTML = time;
	if (time < 10) {
		breakTime.innerHTML = `0${time}`;
	} else {
		breakTime.innerHTML = `${time}`;
	}
	restTime = parseInt(breakTime.textContent) * 60;
});

reduceBreak.addEventListener("click", () => {
	let time = parseInt(breakTime.textContent);
	if (time > 1) {
		time--;
		breakTime.innerHTML = time;
	}
	if (time < 10) {
		breakTime.innerHTML = `0${time}`;
	} else {
		breakTime.innerHTML = `${time}`;
	}
	restTime = parseInt(breakTime.textContent) * 60;
});

// ----------- event listeners ----------------

playBtn.addEventListener("click", countDown);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimers);

// -------- functions --------------

function countDown() {
	if (id === true) {
		id = setInterval(timer, 1000);
	}
}

function timer() {
	if (workTime) {
		let minutes = Math.floor(parseInt(workTime) / 60);
		let seconds = Math.floor(parseInt(workTime) % 60);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		workTime--;
		mainTimer.innerHTML = `${minutes}:${seconds}`;
		if (workTime < 0) {
			alert("Work Time Expired");
		}
	} else {
		let minutes = Math.floor(parseInt(restTime) / 60);
		let seconds = Math.floor(parseInt(restTime) % 60);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		restTime--;
		mainTimer.innerHTML = `${minutes}:${seconds}`;
		if (restTime < 0) {
			alert("Break's Over!!");
			clearInterval(id);
		}
	}
}

function pauseTimer() {
	clearInterval(id);
	id = true;
}
function resetTimers() {
	clearInterval(id);
	id = true;
	defaultTimes();
}

function defaultTimes() {
	workTime = 1500;
	restTime = 300;
	sessionTime.innerHTML = parseInt(25);
	breakTime.innerHTML = "05";
	mainTimer.innerHTML = `${sessionTime.textContent}:00`;
}
