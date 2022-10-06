import {
    arrowLeft,
    arrowRight,
    monthHeader,
    currenDateHeader,
    daysMonth
} from './selectors.js';
import '../scss/style.scss';
import '../scss/calendar.scss';

const date = new Date();
const render = () => {
    // eslint-disable-next-line no-magic-numbers
    const DayLast = new Date(date.getFullYear(), date.getMonth() + 1,0).getDate();
    // eslint-disable-next-line no-magic-numbers
    const DayPrevLast = new Date(date.getFullYear(), date.getMonth(),0).getDate();
    const firstIndex = date.getDay();
    // eslint-disable-next-line no-magic-numbers
    const lastIndex = new Date(date.getFullYear(), date.getMonth() + 1,0).getDay();
    // eslint-disable-next-line no-magic-numbers
    const dayNext = 7 - lastIndex - 1;
    const monthsArray =[
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'];
    let days='';
    monthHeader.innerHTML = monthsArray[date.getMonth()];
    currenDateHeader.innerHTML = date.getFullYear();
    for (let i = firstIndex; i > 0; i--) {
        days += `<div class="prev-date">${DayPrevLast + 1 - i}</div>`;
    }
    for (let i = 1; i <= DayLast; i++) {
        if (i === new Date().getDate()
            && date.getMonth() === new Date().getMonth()
        && date.getFullYear()=== new Date().getFullYear()) {
            days += `<div class="current-date">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }
    for (let i = 1; i <= dayNext; i++) {
        days += `<div class="next-date">${i}</div>`;
    }
    daysMonth.innerHTML=days;
}
arrowLeft.addEventListener('click',() => {
    // eslint-disable-next-line no-magic-numbers
    date.setMonth(date.getMonth() - 1);
    render();
});
arrowRight.addEventListener('click', () => {
    // eslint-disable-next-line no-magic-numbers
    date.setMonth(date.getMonth() + 1);
    render();
});
render();
