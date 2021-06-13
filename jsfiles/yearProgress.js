const meter = document.querySelector(".year");
const value = document.querySelector('.value-year');

// ---------get dates
let thisYear = new Date(new Date().getFullYear(), 0, 1).getTime();//* gets first day of the year;
let nextYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();//* gets first day of the next year;

let current = new Date().getTime();

// ---------calculation percentage
let fractionDays = ((current-thisYear)/(nextYear-thisYear)).toFixed(3);

meter.style.width = (fractionDays*100).toFixed(2) + "%";
value.innerHTML = (fractionDays*100).toFixed(2) + "% Finished";
