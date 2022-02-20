const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";
let todos = [];

const reset = document.querySelector("#resetBtn");

reset.addEventListener("click", function(event) {
    localStorage.clear();
    location.reload();
});

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) { 
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(toDo => toDo.id !== parseInt(li.id));
                        //todo DB에 있는 데이터
    saveTodo();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.classList.add("tododeleteBtn");
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}
todoForm.addEventListener("submit",handleTodoSubmit);


const savedTodo = localStorage.getItem(TODOS_KEY);

if(savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    todos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}
