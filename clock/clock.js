const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    //data객체를 사용
    const date = new Date();
    //시, 분 ,초 가져오기
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //DOM을 이용하여 요소에 update 
    //3항연산자는 if문과 같다.  ? = if , : = else
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
}

function init(){
    getTime();
    //매 초마다 현재 시각을 불러온다.
    setInterval(getTime , 1000);
}
init();