const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

const hUnit = document.getElementById("h-unit");
const mUnit = document.getElementById("m-unit");
const sUnit = document.getElementById("s-unit");

const mr = document.getElementById("meridiem");

let clock = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  h.innerText = hours > 12 ? hours - 12 : hours;
  hUnit.innerText = hours === 1 ? " hr" : " hrs";
  mUnit.innerText = minutes <= 1 ? " min" : " mins";
  sUnit.innerText = seconds <= 1 ? " sec" : " secs";
  mr.innerText = hours < 12 ? " AM" : " PM";

  m.innerText = minutes;
  s.innerText = seconds;

  setTimeout(() => {
    clock();
  }, 1000);
};

clock();
