const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputValid);

function inputValid(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
