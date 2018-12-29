const toDoForm = document.querySelector(".js-toDoform");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event){
    //click 된 버튼을 지우고 ,
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //그 나머지 인덱스들로 새로운 배열을 만들어 
    const newToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id) ;
    });
    //toDo에 넣어준후, 로컬 스토리지에 저장한다.
    toDos = newToDos; 
    saveToDos_LS();
}

function saveToDos_LS(){
    //json 파싱해줘야함(Sting)
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function toDoPaint(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click" , deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId; 
    toDoList.appendChild(li);
    //객체에 저장
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos_LS();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoPaint(currentValue);
    toDoInput.value ="";
}

function loadToDos(){
    //loadedToDos = input으로 들어온 data
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // 들어온 data를 JSON으로 만들어 준다.
        const parsedToDos = JSON.parse(loadedToDos); // 배열을 반환한다.
        //forEach 함수는 array를 위한것임. 잘 사용할수 있도록하자
        parsedToDos.forEach(function(toDo){
            toDoPaint(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit" , handleSubmit);
}
init();