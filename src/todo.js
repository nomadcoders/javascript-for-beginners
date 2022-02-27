const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const ITEM_KEY = "item";

let item = []; //newToDo에 입력된 텍스트가 array에 push됨 -> localStorage에 넣음(텍스트만 저장가능)
//array가 이전의 item + 새로운 item 이 될 수 있게 let으로 해줌.

function saveItems() { //item array의 내용을 localStorage에 넣을거임.
    localStorage.setItem(ITEM_KEY, JSON.stringify(item)); //스트링으로 바꿔서 저장해줌(array의 모양이 됨)
}

function deleteToDo(event) {
    const li = event.target.parentElement; //"button"의 부모인 "li"를 target해서 event를 줌
    li.remove(); //삭제~!
    item = item.filter((item) => item.id !== parseInt(li.id)); 
    //filter()는 array 하나하나에 함수를 실행시킴. item.id는 number, li.id는 String 이라서 parseInt 시켜줌.
    saveItems(); //item이 지워진 array를 새로 저장해줌.
}

function paintToDo(newToDo) { //
    const li = document.createElement("li"); //li element를 생성
    li.id = newToDo.id; //newToDo의 id를 li의 아이디로!
    const span = document.createElement("span"); //span element를 생성
    span.innerText = newToDo.text; //받아온 newToDo가 span안에 innerText 됨
    const button = document.createElement("button"); //button element를 생성
    button.addEventListener("click", deleteToDo);
    //append는 맨 마지막에 써준돠.
    li.appendChild(span); //생성된 li는 span을 자식으로 가짐
    li.appendChild(button); //그다음 span 뒤에 버튼 추가
    toDoList.appendChild(li); //toDoList가 생성된 li를 자식으로 가짐
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; //input에 입력된 값인 toDoInput.value를 newToDo에 저장 후
    toDoInput.value = ""; //toDoInput.value를 비움
    const newToDoObj = { //텍스트와 아이디를 object로 저장
        text:newToDo,
        id: Date.now(),
    }
    item.push(newToDoObj); // paintToDo()가 실행되기 전에 array에 push!
    paintToDo(newToDoObj); //실행
    saveItems();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedItem = localStorage.getItem(ITEM_KEY); //localStorage에서 가져옴

if(savedItem !== null) {
    const parsedItem = JSON.parse(savedItem); //스트링으로 가져온걸 살아있는 array로 바꿔줌.
    item = parsedItem; //item에 parsedItem을 넣어서 이전의 item들을 복원
    parsedItem.forEach(paintToDo); //forEach가 array에 있는 각각의 item에 대해 function을 실행함.    
}

