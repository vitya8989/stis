if (document.querySelector('.reviews_slider')) {
    const reviewSlider = new Swiper('.reviews_slider', {
        speed: 500,
        slidesPerView: 3,
        spaceBetween: 35,
        pagination: {
            el: '.reviews__slider_pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.reviews__slider_next',
            prevEl: '.reviews__slider_prev',
        },
    });
}