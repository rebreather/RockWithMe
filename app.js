const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function loginBtnSubmit(info) {
  info.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); //loginForm에 hidden이라는 클래스를 추가한다.
  greeting.innerText = `Hello ${username}! Have a good day :)`; //greeting.innerText = "hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginBtnSubmit);
