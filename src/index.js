const clockTitle = document.querySelector(".js-clock");

function Timer() {
  //const xmasDay = new Date("2022-12-25:00:00:00+0900");
  const date = new Date();
  //const gap = xmasDay.getTime() - date.getTime();
  //const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  //const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  //const s = Math.floor((gap % (1000 * 60)) / 1000);

  const Day = String(date.getDay).padStart(3, "0");
  const Hours = String(date.getHours).padStart(2, "0");
  const Minutes = String(date.getMinutes).padStart(2, "0");
  const Seconds = String(date.getSeconds).padStart(2, "0");
  clockTitle.innerText = `${Day}d ${Hours}h ${Minutes}m ${Seconds}s `;
}

Timer();
setInterval(Timer, 1000);