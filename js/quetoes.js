const quotes = [
    {
        quote: "야 밥을 맛있게 먹는 방법이 어딨냐 그냥 먹으면 맛있는 거지"
    },
    {
        quote: "음. Tasty."
    },
    {
        quote: "나는 노력을 타고났다"
    },
    {
        quote: "이거 멤버들에게 비밀이지만 난 너희 없음 음악 안 해"
    },
    {
        quote: "서로만 믿고 가자"
    },
    {
        quote: "행복의 정의는 없어요"
    },
    {
        quote: "미적 기준을 다른 사람에게 맞추려 하지마요"
    },
    {
        quote: "하기싫은 걸 해야 하고싶은 것도 한다"
    },
];

const quote = document.querySelector("#quote span:first-child");

const todayQuote = quotes[Math.floor(Math.random()*(quotes.length))];

quote.innerText = todayQuote.quote;