const background = document.querySelector("#background");
let imageNode;

function handleImageLoad() {
    console.log("finished loading");
}

const images = [
    "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png",
    "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png",
    "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png", "30.png",
    "31.png", "32.png", "33.png", "34.png", "35.png", "36.png", "37.png", "38.png", "39.png", "40.png",
    "41.png", "42.png", "43.png", "44.png", "45.png", "46.png"
];

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `img/${imgNumber}.png`;
    image.classList.add("backgroundImage");
    background.appendChild(image);
    imageNode = document.querySelector(".backgroundImage");
    imageFix();
}

function imageFix(event) {
    const image = document.querySelector(".backgroundImage");
    if(window.innerHeight * 16 < window.innerWidth * 9) {
        image.classList.add("widthfix");
        image.classList.remove("hightfix");
    }
    else if (window.innerHeight * 16 > window.innerWidth * 9) {
        image.classList.add("hightfix");
        image.classList.remove("widthfix");
    }
    console.log("image resized", image);
}

function getRandomNum() {
    const number = Math.floor(Math.random()*(images.length));
    return number;
}

function init() {
    const randomNumber = getRandomNum();
    paintImage(randomNumber);
    window.addEventListener("resize", imageFix);
}

init();