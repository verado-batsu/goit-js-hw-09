import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";


const refs = {
	inputEl: document.querySelector('#datetime-picker'),
	startBtn: document.querySelector('[data-start]'),
	timerDays: document.querySelector('[data-days]'),
	timerHours: document.querySelector('[data-hours]'),
	timerMinutes: document.querySelector('[data-minutes]'),
	timerSeconds: document.querySelector('[data-seconds]'),
}
let selectedDateCopy = null;
let timerId = null;
let presentTime = null;
let isCounts = false;

refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', onClickStartBtn);

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		if (new Date() > selectedDates[0]) {
			refs.startBtn.disabled = true;
			Notify.failure('Please choose a date in the future');
			return;
		}
		refs.startBtn.disabled = false;
		selectedDateCopy = selectedDates[0];
	},
};

flatpickr(refs.inputEl, options);

function onClickStartBtn(e) {
	if (isCounts === true) {
		Notify.warning("The timer is already counting down");
		return;
	}
	isCounts = true;
	presentTime = new Date().getTime();
	timerId = setInterval(updateTime, 1000);
}

function updateTime()  {
	presentTime += 1000;
	let ms = selectedDateCopy - presentTime;
	const timer = convertMs(ms);
	renderingTimer(timer);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
	const days = Math.floor(ms / day);
  // Remaining hours
	const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);
	
	if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
		Notify.info("Time is up!");
		isCounts = false;
		clearInterval(timerId);
	}

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
	return String(value).padStart(2,'0');
}

function renderingTimer({ days, hours, minutes, seconds }) {
	refs.timerDays.textContent = addLeadingZero(days);
	refs.timerHours.textContent = addLeadingZero(hours);
	refs.timerMinutes.textContent = addLeadingZero(minutes);
	refs.timerSeconds.textContent = addLeadingZero(seconds);
}
