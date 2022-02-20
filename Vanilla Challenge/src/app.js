const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoArea = document.querySelector(".todo-area");
const logoutBtn = document.querySelector(".logout-btn");

//스트링을 변수에 저장할때는 대문자로 써준돠(관습)
const HIDDEN_CLASSNAME = "hidden"; //"hidden"이라는 클래스네임을 컨트롤하기위해 스트링을 변수로 저장.
const USERNAME_KEY = "username"; // username 키를 스트링으로 변수에 저장

function  onLoginSubmit(event) { //로그인폼을 submit할때!
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); //"hidden"클래스를 추가함(폼이 사라짐)
    const username = loginInput.value; //input에 입력한 value를 username에 저장
    localStorage.setItem(USERNAME_KEY, username); //로컬스토리지에 키와 함께 저장
    location.reload();
    paintGreeting(username); //Hello username이 나타남
}

function paintGreeting(username) { //username을 인사와 함께 출력해주긔
    greeting.innerText = `Hello ${username} !`; //백틱
    greeting.classList.remove(HIDDEN_CLASSNAME); //기존에 있던 "hidden"클래스를 삭제 > Hello username이 화면에 출력
}

const savedUserName = localStorage.getItem(USERNAME_KEY); //로컬스토리지에 저장돼있는 username

if (savedUserName === null) { //null 즉 저장된 username이 없으면(로그인X)
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인폼이 화면에 보여짐  
    toDoArea.classList.add(HIDDEN_CLASSNAME);  
    loginForm.addEventListener("submit", onLoginSubmit);
} else { //null이 아니면(로그인 되어있는 상태)
    paintGreeting(savedUserName); //저장된 username으로 greeting이 화면에 보여짐
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    toDoArea.classList.remove(HIDDEN_CLASSNAME);
   
}

function logoutBtnClick() {    
    localStorage.clear();
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    location.reload();
}

logoutBtn.addEventListener("click", logoutBtnClick);

