import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormBtnClick)

function onFormBtnClick(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements
  
  let i = 0;
  
   setTimeout(() => {
     createPromise(i + 1, delay.value).then(value => console.log(value), error => console.log(error));
     i += 1;

    const timerId = setInterval(() => {
      if (i + 1 > amount.value) {
        clearInterval(timerId)
      } else {
        createPromise(i + 1, step.value*i + Number(delay.value)).then(value => console.log(value), error => console.log(error));
        i += 1;
      }
    }, step.value)
  }, delay.value);     
}



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;    
      if (shouldResolve) {
      resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
    } else {
      reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
    }
    });
  }
  


