import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
	formEl: document.querySelector('.form'),
}
const data = {
	delayValue: 0,
	stepValue: 0,
	amountValue: 0,
}

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('change', onFormChange);



function onFormChange(e) {
	if (e.target.name === 'delay') {
		data.delayValue = Number(e.target.value);
	}
	if (e.target.name === 'step') {
		data.stepValue = Number(e.target.value);
	}
	if (e.target.name === 'amount') {
		data.amountValue = Number(e.target.value);
	}
}

function onFormSubmit(e) {
	e.preventDefault();
	let saveDelay = data.delayValue;
	for (let i = 0; i < data.amountValue; i += 1) {
		createPromise(i + 1, saveDelay)
			.then(({ position, delay }) => {
				Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
			})
			.catch(({ position, delay }) => {
				Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
			});
		saveDelay += data.stepValue;
	}
}

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	return new Promise((res, rej) => {
		setTimeout(() => {
			if (shouldResolve) {
				// Fulfill
				res({ position, delay });
			} else {
				// Reject
				rej({ position, delay });
			}
		}, delay);
	})
}
