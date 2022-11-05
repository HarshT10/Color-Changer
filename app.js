let body = document.querySelector("#canvas");
let btn = document.querySelector("#button");

function bgColorChanger() {
    const hexadecimal = "0123456789ABCDEF";
    let colorCode = "#";
    let i;
    for (i = 0; i < 6; i++){
        colorCode = colorCode + hexadecimal[Math.floor(Math.random() * 16)];
    }
    return colorCode;
}

btn.addEventListener("click", () => {
    body.style.backgroundColor = bgColorChanger();
});