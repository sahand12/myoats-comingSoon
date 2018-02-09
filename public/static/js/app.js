const ONE_DAY = 60 * 60 * 24;
const ONE_HOUR = 60 * 60;
const ONE_MINUTE = 60;
function getStartTimeFromDom() {
  return new Date().getTime();
}
function getEndTimeFromDom() {
  return new Date(2018, 1, 20).getTime();
}

let startTime = getStartTimeFromDom();
const endTime = getEndTimeFromDom();

function calculateDuration(end, start) {
  return Math.floor((end - start)/1000);
}
function calculateNumberOfDays (duration) {
  return Math.floor(duration / ONE_DAY);
}
function calculateNumberOfHours (duration) {
  const remainingSeconds = duration - calculateNumberOfDays(duration) * ONE_DAY;
  return Math.floor(remainingSeconds / ONE_HOUR);
}
function calculateNumberOfMinutes (duration) {
  const remainingSeconds = duration
    - calculateNumberOfDays(duration) * ONE_DAY
    - calculateNumberOfHours(duration) * ONE_HOUR;
  return Math.floor(remainingSeconds / ONE_MINUTE);
}
function calculateNumberOfSeconds (duration) {
  const remainingSeconds = duration
    - calculateNumberOfDays(duration) * ONE_DAY
    - calculateNumberOfHours(duration) * ONE_HOUR
    - calculateNumberOfMinutes(duration) * ONE_MINUTE;
  return Math.floor(remainingSeconds);
}

/* ----------- DOM Interactions ------------- */
const $days = document.getElementById('daysCounter');
const $hours = document.getElementById('hoursCounter');
const $minutes = document.getElementById('minutesCounter');
const $seconds = document.getElementById('secondsCounter');
function setInnerHTML (domNode, text) {
  domNode.innerHTML = text;
}
function render() {
  const duration = calculateDuration(endTime, startTime);
  const days = calculateNumberOfDays(duration);
  const hours = calculateNumberOfHours(duration);
  const minutes = calculateNumberOfMinutes(duration);
  const seconds = calculateNumberOfSeconds(duration);

  setInnerHTML($days, convertNums(days));
  setInnerHTML($hours, convertNums(hours));
  setInnerHTML($minutes, convertNums(minutes));
  setInnerHTML($seconds, convertNums(seconds));
}
function convertNums (num) {
  const table = {
    '0': '٠',
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩'
  };
  return String(num)
    .split('')
    .map(function map (n) {
      return table[n];
    })
    .join('');
}

render();
setInterval(function () {
  startTime += 1000;
  render();
}, 1000);
