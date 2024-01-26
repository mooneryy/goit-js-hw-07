const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', function () {
    const trimmedValue = input.value.trim();

    output.textContent = trimmedValue ? trimmedValue : 'Anonymous';

});