const body = document.querySelector("body");
const IMG_COUNT = 3; 

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add("bgImg");
    body.appendChild(image);
}

function createRandomNumber(){
    const number = Math.floor(Math.random() * IMG_COUNT);
    return number;
}

function init(){
    const randomNumber = createRandomNumber();
    paintImage(randomNumber);
}
init();