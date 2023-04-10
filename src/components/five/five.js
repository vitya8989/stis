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
}