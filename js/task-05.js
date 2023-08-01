const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', handlerName);

function handlerName(event) {
    outputName.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === ""){outputName.textContent = "Anonymous";}
}

