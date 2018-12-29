const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    //이벤트를 막아버린다.
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    //스토리지에 저장
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit" , handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}!`;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //스토리지에 이름이 없으면 input에서 받아서 setting
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();