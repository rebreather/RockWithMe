const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const link = document.querySelector("a");

function loginBtnSubmit(info) {
  info.preventDefault();
  //const username = loginInput.value;
  console.log(info);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("click!"); //기본동작을 막지만 확인을 누르면 동작이 실행 됨
}

loginForm.addEventListener("submit", loginBtnSubmit);
link.addEventListener("click", handleLinkClick)

//새로고침은 form submit의 기본 동작이다.
//preventDefault() 함수는 어떤 event의 기본 행동이든지 발생되지 않도록 막는다.
//링크의 기본 동작은 다른 페이지로 넘어가는 것이다.