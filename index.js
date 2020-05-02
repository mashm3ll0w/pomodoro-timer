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

// time variables
let workTime = 100;
let restTime = 50;
let id = true;

// increase and reduce the session and break times
increaseSession.addEventListener("click", () => {
	let time = parseInt(sessionTime.textContent);
	time += 1;
	sessionTime.innerHTML = time;
	if (time < 10) {
		sessionTime.innerHTML = `0${time}`;
	} else {
		sessionTime.innerHTML = `${time}`;
	}
});

reduceSession.addEventListener("click", () => {
	let time = parseInt(sessionTime.textContent);
	if (time > 1) {
		time -= 1;
		sessionTime.innerHTML = `${time}`;
	}
	if (time < 10) {
		sessionTime.innerHTML = `0${time}`;
	} else {
		sessionTime.innerHTML = `${time}`;
	}
});

increaseBreak.addEventListener("click", () => {
	let time = parseInt(breakTime.textContent);
	time += 1;
	breakTime.innerHTML = time;
	if (time < 10) {
		breakTime.innerHTML = `0${time}`;
	} else {
		breakTime.innerHTML = `${time}`;
	}
	restTime = parseInt(breakTime.textContent);
});

reduceBreak.addEventListener("click", () => {
	let time = parseInt(breakTime.textContent);
	if (time > 1) {
		time -= 1;
		breakTime.innerHTML = time;
	}
	if (time < 10) {
		breakTime.innerHTML = `0${time}`;
	} else {
		breakTime.innerHTML = `${time}`;
	}
	restTime = parseInt(breakTime.textContent);
});

//Set the main timer to read from the set timers
//mainTimer.innerHTML = workTime;

//playBtn.addEventListener("click", countDown());

function timer() {
	if (workTime) {
		let minutes = Math.round(parseInt(workTime) / 60);
		let seconds = Math.round(parseInt(workTime) % 60);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		workTime -= 1;
		mainTimer.innerHTML = `${minutes}:${seconds}`;
		if (workTime < 0) {
			alert("Work Time Expired");
		}
	} else {
		let minutes = Math.round(parseInt(restTime) / 60);
		let seconds = Math.round(parseInt(restTime) % 60);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		restTime -= 1;
		mainTimer.innerHTML = `${minutes}:${seconds}`;
		if (restTime < 0) {
			alert("Break's Over!!");
			clearInterval(id);
		}
	}
}

playBtn.addEventListener("click", () => {
	if (id === true) {
		id = setInterval(timer, 1000);
	}
});

pauseBtn.addEventListener("click", () => {
	clearInterval(id);
	id = true;
});
