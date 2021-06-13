const meter = document.querySelector(".day");
const value = document.querySelector('.value-day');

// ---------get dates
let thisDay = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime();
let nextDay = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+ 1).getTime();

let current = new Date().getTime();

// ---------calculation percentage
let fractionDays = ((current-thisDay)/(nextDay-thisDay)).toFixed(3);

meter.style.width = (fractionDays*100).toFixed(2) + "%";
value.innerHTML = (fractionDays*100).toFixed(2) + "% Finished";
