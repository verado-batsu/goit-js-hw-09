const refs = {
	startBtn: document.querySelector('[data-start]'),
	stopBtn: document.querySelector('[data-stop]'),
}

let timerId = null;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onClickStartBtn);

refs.stopBtn.addEventListener('click', onClickStopBtn);


function onClickStopBtn(e) {
	refs.startBtn.disabled = false;
	refs.stopBtn.disabled = true;
	clearInterval(timerId);
}

function onClickStartBtn(e) {
	refs.startBtn.disabled = true;
	refs.stopBtn.disabled = false;
	addBackgroundColorInBody();
	timerId = setInterval(addBackgroundColorInBody, 1000);
}

function addBackgroundColorInBody() {
	document.body.style.backgroundColor = getRandomHexColor();
} 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}