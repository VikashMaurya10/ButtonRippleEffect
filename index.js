const btnEl = document.querySelector(".btn");
console.log("hello");
btnEl.addEventListener("mouseover", (event) => {
    // console.log(event.pageX - btnEl.offsetLeft);
    // console.log(event.pageY); 
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);
    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
}); 