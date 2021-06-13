const meter = document.querySelector(".month");
const value = document.querySelector('.value-month');

// ---------get dates
let thisMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime();//* gets first day of the month;
let nextMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).getTime();//* gets first day of next month;

let current = new Date().getTime();

// ---------calculation percentage
let fractionDays = ((current-thisMonth)/(nextMonth-thisMonth)).toFixed(3);

meter.style.width = (fractionDays*100).toFixed(2) + "%";
value.innerHTML = (fractionDays*100).toFixed(2) + "% Finished";

// ----------hamburger option
const ham = document.querySelector(".fas");
const nav = document.querySelector('.navlinks');

ham.addEventListener('click',()=>{
    nav.classList.toggle('active');
})