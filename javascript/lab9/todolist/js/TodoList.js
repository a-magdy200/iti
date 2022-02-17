import Todo from "./Todo.js";

class TodoList {
  constructor(containerId = "todo-list", localStorageKey = "todos", taskInputId = "task", addTaskButton = "addTaskBtn") {

    let savedTodos = localStorage.getItem(localStorageKey);//check for saved todos
    const loadedTodos = savedTodos ? JSON.parse(savedTodos) : [];//loads saved todos in memory or create an empty array
    this._todos = loadedTodos.map(todo => new Todo(todo));
    this._taskInput = document.getElementById(taskInputId);//input field
    this._addTaskBtn = document.getElementById(addTaskButton);//add task button
    this._todoListContainer = document.getElementById(containerId);//list container
    this.loadTodos();
    this._addTaskBtn.addEventListener("click", e => {
      this.addTask(e);
    });
    document.addEventListener("click", e => {
      this.handleTodoAction(e);
    });
  }

  createTodo(todo) {
    // This function is just to prepare html to be injected into the dom
    // @params: todo: object {id: number, title: string, isDone: boolean}
    // returns: string
    return `<div class="todo flex ${todo.isDone ? "checked" : ""}" data-id="${todo.id}">
              <div>${todo.title}</div>
              <button class="success" disabled="${todo.isDone && "disabled"}"><i class="fa fa-check"></i></button>
              <button class="error"><i class="fa fa-remove"></i></button>
          </div>`;
  }

  loadTodos() {
    //loads the todos array ( if it has any items ) in the dom
    if (this._todos.length) {
      this._todoListContainer.innerHTML = '';
      this._todoListContainer.style.height = `${34 + (this._todos.length * 57)}px`;
      setTimeout(() => {
        this._todos.forEach(todo => {
          this._todoListContainer.innerHTML += this.createTodo(todo);
        });
      }, 300);
    }
  }

  addTask(e) {
    e.preventDefault();
    const newTask = this._taskInput.value;
    if (newTask !== '') {
      this._taskInput.value = '';
      const todosCount = this._todoListContainer.getElementsByClassName('todo').length;
      if (todosCount === 0) {
        this._todoListContainer.innerHTML = '';
      }
      this._todoListContainer.style.height = `${34 + 57 + (todosCount * 57)}px`;
      setTimeout(() => {
        const todo = new Todo({_title: newTask});// create a new todo object
        this._todos.push(todo);// add the new todo object to the array
        localStorage.setItem("todos", JSON.stringify(this._todos));//save the array to local storage
        this._todoListContainer.innerHTML += this.createTodo(todo);//adds the new todo into the page
      }, 300);
    }
  }

  handleTodoAction(e) {
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
        for (let i = 0; i < this._todos.length; i++) {
          if (this._todos[i].id === id) {
            this._todos[i].isDone = true;
            break;
          }
        }
        target.setAttribute('disabled', 'disabled');
      } else {
        this._todoListContainer.removeChild(parent);
        for (let i = 0; i < this._todos.length; i++) {
          if (this._todos[i].id === id) {
            this._todos.splice(i, 1);
            break;
          }
        }
        let newHeight = '';
        if (this._todoListContainer.childElementCount === 0) {
          newHeight = '53px';
          this._todoListContainer.innerHTML = '<div class="flex">No items in the list</div>';
        } else {
          newHeight = parseInt(this._todoListContainer.style.height, 10) - 57 + 'px';
        }
        this._todoListContainer.style.height = newHeight;
      }
      localStorage.setItem("todos", JSON.stringify(this._todos));
    }
  }
}
export default TodoList;
