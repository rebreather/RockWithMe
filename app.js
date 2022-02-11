const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

function loginBtnSubmit(info) {
    info.preventDefault();
    //const username = loginInput.value;
    console.log(info);
}

loginForm.addEventListener("submit", loginBtnSubmit);

//새로고침은 form submit의 기본 동작이다.
//preventDefault() 함수는 어떤 event의 기본 행동이든지 발생되지 않도록 막는다.
