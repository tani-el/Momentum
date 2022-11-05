const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY = "todos";
let Todos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(Todos));
}
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    Todos = Todos.filter((target) => target.id !== parseInt(li.id));
    saveToDos();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    span.innerText=newTodo.text;
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);

}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text: newTodo,
        id: Date.now(),
    };

    Todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    Todos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}

