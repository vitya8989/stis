@@include('../components/header/header.js');
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

const openCallbackPopupBtns = document.querySelectorAll('.js_open_callback_popup');
const callbackPopup = document.querySelector('.js_callback_popup');

if (openCallbackPopupBtns.length > 0 && callbackPopup) {
    const callbackPopupClose = callbackPopup.querySelector('.js_callback_popup_close');
    const callbackPopupFormContent = callbackPopup.querySelector('.js_callback_popup_form_content');
    const callbackPopupThanks = callbackPopup.querySelector('.js_callback_popup_thanks');

    openCallbackPopupBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            callbackPopup.classList.add('show');
            callbackPopupFormContent.classList.add('active');
            document.body.style.overflow = 'hidden';
        })
    });

    callbackPopupClose.addEventListener('click', () => {
        callbackPopup.classList.remove('show');
        document.body.style.overflow = 'auto';
        if (callbackPopupFormContent.classList.contains('active')) {
            setTimeout(() => {
                callbackPopupFormContent.classList.remove('active');
            }, 400)
        }
        if (callbackPopupThanks.classList.contains('active')) {
            setTimeout(() => {
                callbackPopupThanks.classList.remove('active');
            }, 400)
        }
    });

    callbackPopup.addEventListener('click', (e) => {
        if (!e.target.closest('.callback_popup__body')) {
            callbackPopup.classList.remove('show');
            document.body.style.overflow = 'auto';
            if (callbackPopupFormContent.classList.contains('active')) {
                setTimeout(() => {
                    callbackPopupFormContent.classList.remove('active');
                }, 400)
            }
            if (callbackPopupThanks.classList.contains('active')) {
                setTimeout(() => {
                    callbackPopupThanks.classList.remove('active');
                }, 400)
            }
        }
    });

    const forms = document.querySelectorAll('.js_form');

    $('input[type=tel]').inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false
    });

    $('input[type=tel]').on('focus', function () {
        $(this).removeClass('error');
    });

    forms.forEach((form) => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let telInput = form.querySelector('input[type=tel]');
            if (telInput.value.indexOf('_') !== -1 || telInput.value === '') {
                telInput.classList.add('error');
            } else {
                var formData = new FormData(form);

                // formData.append('utm_source', getUrlParameter("utm_source"));
                // formData.append('utm_medium', getUrlParameter("utm_medium"));
                // formData.append('utm_campaign', getUrlParameter("utm_campaign"));

                var xhr = new XMLHttpRequest();
                xhr.open("POST", '/sendmail.php');

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if(xhr.status == 200) {
                            // gtag('event', 'Отправка формы', { 'event_category': 'form', 'event_action': 'send' });
                            if (form.classList.contains('js_form_block_thanks') && form.nextElementSibling.classList.contains('js_block_thanks')) {
                                form.nextElementSibling.querySelector('.block_thanks__content').style.height = `${form.offsetHeight}px`;
                                form.style.display = 'none';
                                form.nextElementSibling.classList.add('active');
                            } else {
                                if(!callbackPopup.classList.contains('show')){
                                    callbackPopup.classList.add('show');
                                    document.body.style.overflow = 'hidden';
                                } else {
                                    callbackPopupFormContent.classList.remove('active');
                                }
                                callbackPopupThanks.classList.add('active');
                            }
                            form.reset();
                        }
                    }
                };
                xhr.send(formData);
            }
        })
    });
}

const scrollTop = document.querySelector('.scroll_top');

if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
       e.preventDefault();
       window.scrollTo(0, 0);
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY  > 1500) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    });
}





