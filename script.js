const hr = document.getElementById("hour");
const mins = document.getElementById("min");
const sec = document.getElementById("sec");

function displayTime() {
  const date = new Date();
  console.log(date);

  // Getting hours, min,sec
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  let hhRotation = 30 * hh + mm / 2;
  let minRotation = 6 * mm;
  let srcRotation = 6 * ss;
  hr.style.transform = `rotate(${hhRotation}deg)`;
  mins.style.transform = `rotate(${minRotation}deg)`;
  sec.style.transform = `rotate(${srcRotation}deg)`;
}
// displayTime();
setInterval(displayTime, 1000);
