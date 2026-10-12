document.querySelectorAll('form').forEach(form => {
    const fields = form.querySelectorAll('input, textarea, select');
    const result = form.querySelector('.form-result');

    form.onsubmit = event => {
        event.preventDefault();

        const password = form.querySelector('[name="password"]');
        const confirm = form.querySelector('[name="confirmPassword"]');

        if (confirm) {
            confirm.setCustomValidity(
                confirm.value === password.value ? '' : 'Passwords must match'
            );
        }

        if (form.classList.contains('validation-form')) {
            fields.forEach(field => {
                if (field.type === 'checkbox') return;

                const valid = field.checkValidity();
                field.classList.toggle('is-valid', valid);
                field.classList.toggle('is-invalid', !valid);
            });
        }

        result.textContent = form.checkValidity()
            ? 'Success! Demo only, no data was sent.'
            : 'Please correct the highlighted fields.';
    };

    form.oninput = () => {
        result.textContent = '';
        fields.forEach(field => {
            field.setCustomValidity('');
            field.classList.remove('is-valid', 'is-invalid');
        });
    };

    form.onreset = form.oninput;
});