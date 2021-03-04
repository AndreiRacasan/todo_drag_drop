const todoInput = document.querySelector('#todo-input');

const todos = [];

todoInput.addEventListener('keyup', function(e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    todos.push(e.target.value);
    newTodo(e.target.value);
    todoInput.value = '';
  }
});

function newTodo(value) {
  const todo = document.createElement('div');
  const todoText = document.createElement('p');
  const todoCheckBox = document.createElement('input');
  const todoCheckBoxLabel = document.createElement('label');
  const todoCross = document.createElement('span');

  todo.textContent = value;
  todoCheckBox.type = 'checkbox';
  todoCheckBox.name = 'checkbox';
  todoCheckBoxLabel.htmlFor = 'checkbox';
  todoCheckBoxLabel.addEventListener('click', function (e) {
    if (todoCheckBox.checked) {
      todo.checked = false;
      todoText.style.textDecoration= 'none';
      todoCheckBoxLabel.classList.remove('active');
    } else {
      todoCheckBox.checked = true;
      todoText.style.textDecoration = 'line-through';
      todoCheckBoxLabel.classList.add = 'active';
    }
  });

  todoCross.textContent = 'X';
  todoCross.addEventListener('click', function(e){
    e.target.parentElement.remove();
  })

}

function changeTheme () {
  document.body.classList.toggle('light');
}