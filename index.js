const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let timerId;
  return (seconds) => {
    let remainingSeconds = seconds;
    let hours, minutes;
    clearInterval(timerId); 
    timerId = setInterval(() => {
      if (remainingSeconds === 0) {
        clearInterval(timerId);
      } else {
        remainingSeconds -= 1;
        hours = Math.floor(remainingSeconds / 3600);
        minutes = Math.floor((remainingSeconds % 3600) / 60);
        timerEl.textContent = formatTime(hours, minutes, remainingSeconds % 60);
      }
    }, 1000);
  };
};

const formatTime = (hours, minutes, seconds) => {
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g,'');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});