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
}