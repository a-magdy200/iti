const alarmForm = document.forms[0];
const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
const audio = document.getElementById("audio");
let hours, minutes, seconds, timer;
const tickingTrack = "tick.wav";
const alarmTrack = "alarm.wav";
const onInputChange = e => {
  const target = e.target;
  const targetVal = target.value;
  if (target.nodeName.toLowerCase() === 'input') {
    const key = e.key;
    switch (key) {
      case 'ArrowUp':
        target.value = targetVal === '' ? 1 : parseInt(targetVal, 10) + 1;
        break;
      case 'ArrowDown':
        target.value = (targetVal === '' ? 0 : (targetVal === '0' ? '0' : parseInt(targetVal, 10) - 1));
        break;
      case 'ArrowLeft':
      case 'Backspace':
      case 'Delete':
      case 'ArrowRight':
        break;
      default:
        const value = parseInt(key, 10);
        e.preventDefault();
        if (!isNaN(value)) {
          const currentValue = targetVal === '' ? '0' : parseInt(targetVal, 10);
          const maxValue = parseInt(target.getAttribute('data-max'));
          target.value = currentValue.toString() + value;
          if (parseInt(target.value, 10) > maxValue) {
            target.value = maxValue;
          }
        }
        break;
    }
    if (key !== 'Delete' && key !== 'Backspace') {

    }
  }
}
const onFormSubmit = e => {
  e.preventDefault();
  hours = parseInt(alarmForm.hours.value || "0", 10);
  minutes = parseInt(alarmForm.minutes.value || "0", 10);
  seconds = parseInt(alarmForm.seconds.value || "0", 10);
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        if (hours === 0) {
          onFormReset();
          // run alarm
          // todo fix alarm
          audio.setAttribute("src", alarmTrack);
          audio.play();
          alert("Alarm!!");
          return;
        } else {
          hours--;
          minutes = 59;
        }
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    // todo fix sound
    audio.play();
    hoursContainer.innerHTML = hours < 10 ? "0" + hours : hours;
    minutesContainer.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    secondsContainer.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
}
const onFormReset = () => {
  hoursContainer.innerHTML = "00";
  minutesContainer.innerHTML = "00";
  secondsContainer.innerHTML = "00";
  hours = minutes = seconds = 0;
  clearInterval(timer);
};
document.addEventListener("keydown", onInputChange);
alarmForm.addEventListener("submit", onFormSubmit);
alarmForm.addEventListener("reset", onFormReset);
