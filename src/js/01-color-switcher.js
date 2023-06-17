const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
}
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.btnStart.addEventListener('click', onBtnStart)
refs.btnStop.addEventListener('click', onBtnStop)

refs.btnStop.setAttribute('disabled', true);

function onBtnStart() {
    timerId = setInterval(() => { 
        document.body.style.backgroundColor = getRandomHexColor();  
        refs.btnStart.setAttribute('disabled', true);
        refs.btnStop.removeAttribute('disabled');
    }, 1000)
}

function onBtnStop() {
    clearInterval(timerId)
    refs.btnStart.removeAttribute('disabled');
    refs.btnStop.setAttribute('disabled', true);
}