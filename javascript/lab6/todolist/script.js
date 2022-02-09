let savedTodos = localStorage.getItem("todos");//check for saved todos
const todos = savedTodos ? JSON.parse(savedTodos) : [];//loads saved todos in memory or create an empty array
const taskInput = document.getElementById("task");//input field
const addTaskBtn = document.getElementById("addTaskBtn");//add task button
const todoListContainer = document.getElementById('todo-list');//list container
const createTodo = (todo) => {
  // This function is just to prepare html to be injected into the dom
  // @params: todo: object {id: number, title: string, isDone: boolean}
  // returns: string
  return `<div class="todo flex ${todo.isDone && "checked"}" data-id="${todo.id}">
                <div>${todo.title}</div>
                <button class="success" disabled="${todo.isDone && "disabled"}"><i class="fa fa-check"></i></button>
                <button class="error"><i class="fa fa-remove"></i></button>
            </div>`;
};
(() => {
  //this anonymous function runs at load of the page
  //loads the todos array ( if it has any items ) in the dom
  if (todos.length) {
    todoListContainer.innerHTML = '';
    todoListContainer.style.height = `${34 + (todos.length * 57)}px`;
    setTimeout(() => {
      todos.forEach(todo => {
        todoListContainer.innerHTML += createTodo(todo);
      });
    }, 300);
  }
})()
const addTask = (e) => {
  e.preventDefault();
  const newTask = taskInput.value;
  if (newTask !== '') {
    taskInput.value = '';
    const todosCount = todoListContainer.getElementsByClassName('todo').length;
    if (todosCount === 0) {
      todoListContainer.innerHTML = '';
    }
    todoListContainer.style.height = `${34 + 57 + (todosCount * 57)}px`;
    setTimeout(() => {
      const todo = {// create a new todo object
        id: todos.length,
        title: newTask,
        isDone: false,
      };
      todos.push(todo);// add the new todo object to the array
      localStorage.setItem("todos", JSON.stringify(todos));//save the array to local storage
      todoListContainer.innerHTML += createTodo(todo);//adds the new todo into the page
    }, 300);
  }
};
const handleTodoAction = e => {
  e.preventDefault();
  let target = e.target;
  if (target.nodeName.toLowerCase() === 'i') {
    target = target.parentElement;
  }
  const className = target.className;
  if (className === 'success' || className === 'error') {
    const parent = target.parentNode;
    const id = parseInt(parent.getAttribute("data-id"), 10);
    if (className === 'success') {
      if (target.getAttribute("disabled") === "disabled") {
        return;
      }
      parent.className += ' checked';
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          todos[i].isDone = true;
          break;
        }
      }
      target.setAttribute('disabled', 'disabled');
    } else {
      todoListContainer.removeChild(parent);
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          todos.splice(i, 1);
          break;
        }
      }
      let newHeight = '';
      if (todoListContainer.childElementCount === 0) {
        newHeight = '53px';
        todoListContainer.innerHTML = '<div class="flex">No items in the list</div>';
      } else {
        newHeight = parseInt(todoListContainer.style.height, 10) - 57 + 'px';
      }
      todoListContainer.style.height = newHeight;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};
addTaskBtn.addEventListener("click", addTask);
document.addEventListener("click", handleTodoAction);
