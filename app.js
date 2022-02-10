const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

function loginBtnSubmit(info) {
    info.preventDefault();
    //const username = loginInput.value;
    console.log(info);
}

loginForm.addEventListener("submit", loginBtnSubmit);