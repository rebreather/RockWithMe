const title = document.querySelector("div.hello:first-child h2");

const superEventHandler = {
    handleMouseIn: function handleMouseIn() {
        title.innerText = "The mouse is here";
        title.style.color = "blue";
    },
    handleMouseLeave: function handleMouseLeave() {
        title.innerText = "The mouse is gone";
        title.style.color = "pink";
    },
    handleMouseClick: function handleMouseClick() {
        title.innerText = "That was a right click";
        title.style.color = "tomato";
    },
    handleWindowResize: function handleWindowResize() {
        title.innerText = "You just resized";
        title.style.color = "purple";
    }
};
title.addEventListener("mouseenter", superEventHandler.handleMouseIn);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);

window.addEventListener("contextmenu", superEventHandler.handleMouseClick);
window.addEventListener("resize", superEventHandler.handleWindowResize);