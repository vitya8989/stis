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
}