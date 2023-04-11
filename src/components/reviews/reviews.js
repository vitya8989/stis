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
}