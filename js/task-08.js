const elements = {
    form: document.querySelector('.login-form')}

elements.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event){
    event.preventDefault();

    const {elements: { email, password }} = event.currentTarget;

    console.log({Email:email.value, Password:password.value});

    if (email.value==="" || password.value==="") { alert ('Всі поля повинні бути заповнені')}
    
};



