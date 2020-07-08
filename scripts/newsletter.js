const submitBtn = document.querySelector('#mc-embedded-subscribe');
const form = document.getElementById('mc-embedded-subscribe-form');

const isEmailValid = function (email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

const isRodoValid = function (rodoCheckbox) {
    return rodoCheckbox.checked;
}



const validate = function (e) {
    e.preventDefault();
    const errors = [];

    const emailValid = isEmailValid(document.querySelector('#mce-EMAIL').value);
    const rodoValid = isRodoValid(document.querySelector('input.gdpr'));


    if (!emailValid) {
        errors.push('Pole email jest nieprawidłowe');
        document.querySelector('.error-email').classList.remove('hidden');
    } else {
        document.querySelector('.error-email').classList.add('hidden');
    }
    if (!rodoValid) {
        errors.push('Pole musi być zaznaczone');
        document.querySelector('.error-rodo').classList.remove('hidden');
    } else {
        document.querySelector('.error-rodo').classList.add('hidden');
    }

    // console.log(errors);

    if (errors.length === 0) {
        form.submit();

    }
}
submitBtn.addEventListener('click', validate);
