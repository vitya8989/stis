const openCallbackPopupBtns = document.querySelectorAll('.js_open_callback_popup');

if (openCallbackPopupBtns.length > 0) {
    const callbackPopup = document.querySelector('.js_callback_popup');
    const callbackPopupClose = callbackPopup.querySelector('.js_callback_popup_close');
    const callbackPopupFormContent = callbackPopup.querySelector('.js_callback_popup_form_content');
    const callbackPopupThanks = callbackPopup.querySelector('.js_callback_popup_thanks');

    openCallbackPopupBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openCallbackPopup();
        })
    });

    callbackPopupClose.addEventListener('click', () => {
        closeCallbackPopup();
    });

    callbackPopup.addEventListener('click', (e) => {
        if (!e.target.closest('.callback_popup__body')) {
            closeCallbackPopup();
        }
    });

    function openCallbackPopup() {
        callbackPopup.classList.add('show');
        callbackPopupFormContent.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCallbackPopup() {
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


