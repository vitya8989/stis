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

