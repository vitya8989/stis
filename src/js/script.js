@@include('../components/header/header.js');
@@include('./form.js');
@@include('../components/qwiz/qwiz.js');
@@include('../components/more/more.js');
@@include('../components/five/five.js');
@@include('../components/works/works.js');
@@include('../components/reviews/reviews.js');
@@include('../components/map/map.js');

const changeDateMonth = document.querySelectorAll('.change-date-month');

if (changeDateMonth.length > 0) {
    changeDateMonth.forEach((elem) => {
        elem.textContent = getActionDate(true);
    });
}

function getActionDate(month = true) {
    let result;
    let date = new Date();
    let today = date.getDate();
    let monthes = ['января','февраля','марта', 'апреля','мая','июня','июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    if (today < 15) {
        date.setDate(15);
        if (month) {
            result = date.getDate()+' '+monthes[date.getMonth()];
        } else {
            result = date.getDate()+' '+monthes[date.getMonth()] +' '+date.getFullYear();
        }
    } else {
        let lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        let lastDay = lastDayDate.toLocaleString('RU', {day: 'numeric'});
        if (month) {
            result = lastDay+' '+monthes[date.getMonth()];
        } else {
            result = lastDay+' '+monthes[date.getMonth()] +' '+date.getFullYear();
        }
    }
    return result;
}






