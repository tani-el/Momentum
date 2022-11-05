const HIDDEN = "hidden";
const USERNAME_KEY = "username";

const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const ToDoforms = document.querySelector("#todo-form");
const ToDolists=document.querySelector("#todo-list");
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN);
    ToDoforms.classList.remove(HIDDEN);
    ToDolists.classList.remove(HIDDEN);
}

function onLoginSubmit(event){
    event.preventDefault;
    loginForm.classList.add(HIDDEN);
    const username =loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}



if(savedUsername===null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}