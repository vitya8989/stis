const navOpen = document.querySelector('.js_nav_open');

if (navOpen) {
    const navWr = document.querySelector('.js_nav_wr');
    const nav = navWr.querySelector('.js_nav');
    const navClose = navWr.querySelector('.js_nav_close');
    const headerMenuLinks = nav.querySelectorAll('a.header__menu_item');

    navOpen.addEventListener('click', () => {
        navWr.classList.add('show');
        nav.classList.add('show');
        document.body.classList.add('this--overflow');
    });
    navClose.addEventListener('click', () => {
        navWr.classList.remove('show');
        nav.classList.remove('show');
        document.body.classList.remove('this--overflow');
    });
    navWr.addEventListener('click', (e) => {
        if (!e.target.closest('.js_nav') && window.innerWidth < 1100) {
            navWr.classList.remove('show');
            nav.classList.remove('show');
            document.body.classList.remove('this--overflow');
        }
    });
    headerMenuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1100) {
                navWr.classList.remove('show');
                nav.classList.remove('show');
                document.body.classList.remove('this--overflow');
            }
        });
    });
};
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


;
const qwizForm = document.querySelector('.js_qwiz_form');

if (qwizForm) {
    // разблокировка кнопок

    const qwizSteps = qwizForm.querySelectorAll('.qwiz__content');
    qwizSteps.forEach((step) => {
        let radioInputs = step.querySelectorAll('input[type="radio"]');
        let qwizNextStep = step.querySelector('.this--next');
        let checkBoxesInputs = step.querySelectorAll('input[type="checkbox"]');

        if (radioInputs.length > 0) {
            radioInputs.forEach((radio) => {
                radio.addEventListener('change', () => {
                    if (radio.value !== '' && qwizNextStep.classList.contains('disabled')) {
                        qwizNextStep.classList.remove('disabled');
                    }
                });
            });
        }
        if (checkBoxesInputs.length > 0) {
            let activeChecboxes = 0
            checkBoxesInputs.forEach((checkBox) => {
                checkBox.addEventListener('change', () => {
                    if (checkBox.checked) {
                        activeChecboxes++;
                    } else {
                        activeChecboxes--;
                    }
                    if (activeChecboxes > 0) {
                        qwizNextStep.classList.remove('disabled');
                    } else {
                        qwizNextStep.classList.add('disabled');
                    }
                });
            });
        }
    });

    // смена шагов
    const changeStepBtns = qwizForm.querySelectorAll('.js_change_step');
    const qwizDiscountValue = qwizForm.querySelector('.js_qwiz_discount_value');
    changeStepBtns.forEach((changeStep) => {
        changeStep.addEventListener('click', (e) => {
            e.preventDefault();
            qwizSteps.forEach((step) => {
                if (changeStep.dataset.step === step.dataset.step && !step.classList.contains('active')) {
                    step.classList.add('active');
                    if (step.dataset.step === '1') {
                        qwizDiscountValue.textContent = '5%';
                    } else if (step.dataset.step === '2') {
                        qwizDiscountValue.textContent = '10%';
                    } else if (step.dataset.step === '3') {
                        qwizDiscountValue.textContent = '15%';
                    } else if (step.dataset.step === '4') {
                        qwizDiscountValue.textContent = '20%';
                    }
                } else {
                    step.classList.remove('active');
                }
            });
        });
    });
};
if (document.querySelector('.more_slider')) {
    const mastersSlider = new Swiper('.more_slider', {
        speed: 300,
        spaceBetween: 8,
        slidesPerView: 'auto',
        pagination: {
            el: '.more__slider_pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.more__slider_next',
            prevEl: '.more__slider_prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 40,
                slidesPerView: 'auto',
            },
        }
    });
    const moreNavSlider = new Swiper('.more_nav_slider', {
        slideToClickedSlide: true,
        slidesPerView: 4,
        spaceBetween: 9,

        breakpoints: {
            768: {
                spaceBetween: 13,
                slidesPerView: 4,
                slideToClickedSlide: true,
            },
        }
    });
    const moreMainSlider = new Swiper('.more_main_slider', {
        speed: 500,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: moreNavSlider,
        },
    });
}

const moreAccordionHeads = document.querySelectorAll('.js_more_accordion_head');

if (moreAccordionHeads.length > 0) {
    moreAccordionHeads.forEach((head) =>{
        head.addEventListener('click', function () {
            if (window.innerWidth < 1200) {
                moreAccordionHeads.forEach((head) => {
                    if (head.nextElementSibling.classList.contains('opened') && head !== this) {
                        head.nextElementSibling.classList.remove('opened');
                        head.nextElementSibling.style.maxHeight = 0;
                        head.classList.remove('active');
                    }
                });
                if (this.nextElementSibling.classList.contains('opened')) {
                    this.nextElementSibling.classList.remove('opened');
                    this.nextElementSibling.style.maxHeight = 0;
                    this.classList.remove('active');
                } else {
                    this.nextElementSibling.classList.add('opened');
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
                    this.classList.add('active');
                }
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1200) {
            moreAccordionHeads.forEach((head) =>{
                head.nextElementSibling.classList.remove('opened');
                head.nextElementSibling.style.maxHeight = 0;
                head.classList.remove('active');
            });
        } else {
            moreAccordionHeads.forEach((head) =>{
                head.nextElementSibling.classList.remove('opened');
                head.nextElementSibling.style.maxHeight = head.nextElementSibling.scrollHeight + 'px';;
                head.classList.remove('active');
            });
        }
    });
};
const fiveTabLinks = document.querySelectorAll('.js_five_tab_link');

if (fiveTabLinks.length > 0) {
    const fiveTabs = document.querySelectorAll('.js_five_tab');

    fiveTabLinks.forEach((tabLink) => {
        tabLink.addEventListener('click', function (e) {
           e.preventDefault();
            fiveTabLinks.forEach((link) => {
                if (link !== this) {
                    link.classList.remove('active');
                }
            });
            fiveTabs.forEach((tab) => {
               if (this.dataset.tab === tab.dataset.tab) {
                   tab.classList.add('active');
               } else {
                   tab.classList.remove('active');
               }
            });
            this.classList.add('active');
        });
    });
}


const fiveAccordionHeads = document.querySelectorAll('.js_five_accordion_head');

if (fiveAccordionHeads.length > 0) {
    fiveAccordionHeads.forEach((head) =>{
        head.addEventListener('click', function () {
            if (window.innerWidth < 1024) {
                fiveAccordionHeads.forEach((head) => {
                    if (head.nextElementSibling.classList.contains('opened') && head !== this) {
                        head.nextElementSibling.classList.remove('opened');
                        head.nextElementSibling.style.maxHeight = 0;
                        head.classList.remove('active');
                    }
                });
                if (this.nextElementSibling.classList.contains('opened')) {
                    this.nextElementSibling.classList.remove('opened');
                    this.nextElementSibling.style.maxHeight = 0;
                    this.classList.remove('active');
                } else {
                    this.nextElementSibling.classList.add('opened');
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
                    this.classList.add('active');
                }
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
            fiveAccordionHeads.forEach((head) =>{
                head.nextElementSibling.classList.remove('opened');
                head.nextElementSibling.style.maxHeight = 0;
                head.classList.remove('active');
            });
        } else {
            fiveAccordionHeads.forEach((head) =>{
                head.nextElementSibling.classList.remove('opened');
                head.nextElementSibling.style.maxHeight = 'none';
                head.classList.remove('active');
            });
        }
    });
};
if (document.querySelector('.works_slider')) {
    const worksSlider = new Swiper('.works_slider', {
        speed: 500,
        slidesPerView: 1,
        effect: 'fade',
        autoHeight: true,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.works__slider_pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.works__slider_next',
            prevEl: '.works__slider_prev',
        },
    });
}

;
if (document.querySelector('.reviews_slider')) {
    const reviewSlider = new Swiper('.reviews_slider', {
        speed: 500,
        slidesPerView: 'auto',
        spaceBetween: 8,
        pagination: {
            el: '.reviews__slider_pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.reviews__slider_next',
            prevEl: '.reviews__slider_prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 35,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 35,
            }
        }
    });
};
if (document.getElementById("map")) {
    ymaps.ready(function () {
        var map = new ymaps.Map(document.getElementById("map"), {
            center: [59.970113007741, 30.375625058352],
            zoom: 9
        });
        // —оздаем инстанцию геометрии многоугольника (указываем координаты вершин контуров).
        var polygonGeometry = new ymaps.Polygon([[
                [59.6982, 30.1959], [59.6489, 30.0653], [59.6903, 29.8518], [59.7731, 29.8504], [59.8672, 29.8415], [59.9744, 29.9067], [60.1111, 29.8785], [60.1672, 29.8740], [60.1953, 29.9928], [60.2192, 30.1178], [60.2602, 30.1850], [60.2684, 30.2489], [60.2466, 30.4482], [60.2203, 30.5491], [60.0699, 30.7455], [60.0513, 30.8334], [60.0030, 30.8799], [59.9321, 30.8895], [59.8407, 30.9074], [59.8078, 30.8154], [59.7864, 30.7440], [59.7594, 30.7096], [59.7171, 30.6334], [59.6793, 30.4308], [59.6692, 30.2393], [59.6982, 30.1959],
            ]],
            {
                hintContent: "Зона бесплатных замеров",
            }, {
                fillColor: '#007db6',
                strokeColor: '#007db6',
                opacity: 0.5,
                strokeWidth: 5,
            });
        map.geoObjects.add(polygonGeometry);


        var placemark1 = new ymaps.Placemark([59.870113007741, 30.375625058352], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Международная</h4><li><address>Ул.Белы Куна 2 корп1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 9:00 до 21:00<br/> сб–вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark1);


        var placemark2 = new ymaps.Placemark([60.00959054236, 30.261460412896], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Комендантский</h4><li><address>ул. Уточкина, 2, корп. 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 9:00 до 20:00<br/> сб–вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark2);


        var placemark3 = new ymaps.Placemark([59.832190476934, 30.38781417247], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Купчино</h4><li><address>ул. Ярослава Гашека, 4, корп. 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 9:00 до 21:00<br/> сб–вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark3);

        var placemark4 = new ymaps.Placemark([59.905461243685, 30.479990303774], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Дыбенко</h4><li><address>ул. Дыбенко, 27, корп. 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 9:00 до 21:00<br/> сб–вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark4);

        var placemark5 = new ymaps.Placemark([60.043408163411, 30.378085417943], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Гражданский проспект</h4><li><address>просп. Просвещения, 53, корп. 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 11:00 до 20:00<br/>сб–вс — с 11:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark5);

        var placemark6 = new ymaps.Placemark([60.014400645678, 30.393823901721], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Академическая</h4><li><address>просп. Науки, 12</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 9:00 до 21:00<br/>сб–вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark6);

        var placemark7 = new ymaps.Placemark([59.833497, 30.197434], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Пр-т Ветеранов</h4><li><address>пр. Ветеранов, д. 109 корп. 4, 2 этаж</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–сб — с 10:00 до 20:00,<br/> вс — с 11:00 до 19:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark7);

        var placemark8 = new ymaps.Placemark([59.999723, 30.260379], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Богатырский</h4><li><address><br />Богатырский пр., 18, корп.1, офис 609А</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 10:00 до 18:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark8);

        var placemark9 = new ymaps.Placemark([59.737900, 30.088800], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Красное Село</h4><li><address>пр. Ленина, д. 59</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 09:00 до 21:00<br/> вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark9);

        var placemark10 = new ymaps.Placemark([59.949749, 30.233466], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Приморская</h4><li><address>ул. Наличная, д. 49</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 09:00 до 20:00<br/> вс — с 10:00 до 19:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark10);

        //var placemark11 = new ymaps.Placemark([60.039386, 30.333448], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Озерки</h4><li><address>пер. Учебный, 2</address></li><li><strong>Электронная почта:</strong><a href="sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 10:00 до 20:00</li><br/> </li></ul></div></ul></div>'});
        //map.geoObjects.add(placemark11);

        var placemark12 = new ymaps.Placemark([59.737246, 30.611710], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>г. Колпино</h4><li><address>г. Колпино, ул. Тверская, 50</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 09:00 до 20:00<br/> сб–вс — с 10:00 до 20:00 </li></ul></div></ul></div>'});
        map.geoObjects.add(placemark12);

        var placemark13 = new ymaps.Placemark([60.055111, 30.440159], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Девяткино</h4><li><address>М. Девяткино, просп. Авиаторов Балтики, д.11/1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–вс — с 10:00 до 20:00 </li></ul></div></ul></div>'});
        map.geoObjects.add(placemark13);

        var placemark14 = new ymaps.Placemark([59.862429, 30.387868], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>пр-т Славы</h4><li><address> ул. Бухарестская, д. 39, корп. 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–вс — с 09:00 до 20:00<br/> вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark14);

        var placemark15 = new ymaps.Placemark([60.052447, 30.339853], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Проспект Просвещения</h4><li><address>ул. Есенина 32, корп 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 09:00 до 20:00<br/> сб–вс — с 10:00 до 19:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark15);

        $(".contacts_item").click(function () {
            if ($(this).attr("rel") == 1) {
                map.setCenter([59.870113007741, 30.375625058352], 13);
                placemark1.balloon.open();
            } else if ($(this).attr("rel") == 2) {
                map.setCenter([60.00959054236, 30.261460412896], 13);
                placemark2.balloon.open();
            } else if ($(this).attr("rel") == 3) {
                map.setCenter([59.832190476934, 30.38781417247], 13);
                placemark3.balloon.open();
            } else if ($(this).attr("rel") == 4) {
                map.setCenter([59.905461243685, 30.479990303774], 13);
                placemark4.balloon.open();
            } else if ($(this).attr("rel") == 5) {
                map.setCenter([60.043408163411, 30.378085417943], 13);
                placemark5.balloon.open();
            } else if ($(this).attr("rel") == 6) {
                map.setCenter([60.014400645678, 30.393823901721], 13);
                placemark6.balloon.open();
            } else if ($(this).attr("rel") == 7) {
                map.setCenter([59.833497, 30.197434], 13);
                placemark7.balloon.open();
            } else if ($(this).attr("rel") == 8) {
                map.setCenter([59.999723, 30.260379], 13);
                placemark8.balloon.open();
            } else if ($(this).attr("rel") == 9) {
                map.setCenter([59.737900, 30.088800], 13);
                placemark9.balloon.open();
            } else if ($(this).attr("rel") == 10) {
                map.setCenter([59.949749, 30.233466], 13);
                placemark10.balloon.open();
            } else if ($(this).attr("rel") == 11) {
                map.setCenter([60.039386, 30.333448], 13);
                placemark11.balloon.open();
            } else if ($(this).attr("rel") == 12) {
                map.setCenter([59.737246, 30.611710], 13);
                placemark12.balloon.open();
            } else if ($(this).attr("rel") == 13) {
                map.setCenter([60.055111, 30.440159], 13);
                placemark13.balloon.open();
            } else if ($(this).attr("rel") == 14) {
                map.setCenter([59.862429, 30.387868], 14);
                placemark13.balloon.open();
            } else if ($(this).attr("rel") == 15) {
                map.setCenter([60.052447, 30.339853], 15);
                placemark13.balloon.open();
            }
        });
    });
};

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






