const modal = document.querySelector("#modal");
const btn = document.querySelector(".modal-btn");

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginBtnSubmit(info) {
  info.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  loginForm.classList.add(HIDDEN_CLASSNAME); //loginForm에 hidden이라는 클래스를 추가한다.
  paintGreetings(username);
}

function paintGreetings(username) {
  if(username === '') {
    greeting.innerText = `Hi Stranger👋`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }
  else {
    greeting.innerText = `Hi ${username}👋`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginBtnSubmit);
}
else {
  //show the greetings
  paintGreetings(savedUsername);
}