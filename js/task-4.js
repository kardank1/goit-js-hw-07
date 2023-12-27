const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", sendForm);

function sendForm(event){
    event.preventDefault();
    const form = event.target;
    if(form.elements.email.value == "" || form.elements.password.value == ""){
        return alert('All form fields must be filled in');
    }

    const formInfo = {};
    formInfo.email = form.elements.email.value.trim();
    formInfo.password = form.elements.password.value.trim();
    console.log(formInfo);
    loginForm.reset();
}