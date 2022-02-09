const taskInput = document.getElementById("task");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoListContainer = document.getElementById('todo-list');
const createTodo = (todo) => {
  return `<div class="todo flex">
                <div>${todo}</div>
                <button class="success"><i class="fa fa-check"></i></button>
                <button class="error"><i class="fa fa-remove"></i></button>
            </div>`;
};
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
      todoListContainer.innerHTML += createTodo(newTask);
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
    if (className === 'success') {
      parent.className += ' checked';
      target.setAttribute('disabled', 'disabled');
    } else {
      todoListContainer.removeChild(parent);
      let newHeight = '';
      if (todoListContainer.childElementCount === 0) {
        newHeight = '53px';
        todoListContainer.innerHTML = '<div class="flex">No items in the list</div>';
      } else {
        newHeight = parseInt(todoListContainer.style.height, 10) - 57 + 'px';
      }
      todoListContainer.style.height = newHeight;
    }
  }
};
addTaskBtn.addEventListener("click", addTask);
document.addEventListener("click", handleTodoAction);
