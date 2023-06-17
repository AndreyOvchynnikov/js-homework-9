import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputRef = document.querySelector('#datetime-picker')

const btnRef = document.querySelector('button[data-start]')
btnRef.setAttribute('disabled', true)

const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date()
    if (selectedDates[0] > date) {
      btnRef.removeAttribute('disabled');
    } else {
      Notiflix.Notify.failure("Please choose a date in the future");
    }
  },
};
btnRef.addEventListener('click', onBtnClick)

function onBtnClick() {
  btnRef.setAttribute('disabled', true);
  const chosenDate = new Date(inputRef.value);
  const startTime = chosenDate.getTime()

  timerId = setInterval(() => {
   
    const currentTime = Date.now()
    const timerTime = startTime - currentTime
    const { days, hours, minutes, seconds } = convertMs(timerTime);
    
    if (timerTime <= 0) {
      stopTimer();
      return;
    }
   
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minutesRef.textContent = minutes;
    secondsRef.textContent = seconds;

  }, 1000);
    
} 

function stopTimer() {
  clearInterval(timerId)
  btnRef.removeAttribute('disabled');
  window.alert('Время вышло!')
}
 

flatpickr(inputRef, options);


function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = padTime(Math.floor(ms / day));
  const hours = padTime(Math.floor((ms % day) / hour));
  const minutes = padTime(Math.floor(((ms % day) % hour) / minute));
  const seconds = padTime(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function padTime(value) {
  if (value.length === 3) {
    return String(value).padStart(3, '0');
  }
    return String(value).padStart(2, '0'); 
}






