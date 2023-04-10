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
}