document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const fields = ['name', 'email', 'age', 'password', 'confirmPassword'];

    const validations = {
        name: (value) => value.length >= 2 ? '' : 'Name must be at least 2 characters',
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format',
        age: (value) => value >= 18 && value <= 120 ? '' : 'Age must be between 18 and 120',
        password: (value) => value.length >= 8 ? '' : 'Password must be at least 8 characters',
        confirmPassword: (value) => {
            const password = document.getElementById('password').value;
            return value === password ? '' : 'Passwords do not match'
        }
    };

    fields.forEach(field => {
        const input = document.getElementById(field);
        const errorSpan = document.getElementById(`${field}Error`);

        input.addEventListener('input', () => {
            const error = validations[field](input.value);
            errorSpan.textContent = error;
            input.classList.toggle('invalid', !!error);
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        fields.forEach(field => {
            const input = document.getElementById(field);
            const errorSpan = document.getElementById(`${field}Error`);
            const error = validations[field](input.value);

            errorSpan.textContent = error;
            input.classList.toggle('invalid', !!error);

            if (error) isValid = false;
        });

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});