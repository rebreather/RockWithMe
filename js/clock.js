const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    
}

getClock();
setInterval(getClock, 1000);






// 내가 실행하고자 하는 함수, 호출되는 함수 실행 간격을 몇초로 할건지
// setInterval(sayHello, 5000); //5초
// 내기ㅏ 실행하고자 하는 함수, 얼마나 기다릴지 ms단위로 넣기(반복 X)
// setTimeout(sayHello,5000);

/*
padStart()
ex> "1".padStart(2, "0") -> "01"
1이란 string을 2만큼의 길이를 가진 string으로 만드는데,
만약 길이가 2가 아니라면 앞에 "0"을 붙이도록 하는 함수
padEnd()는 뒤에 채움
*/