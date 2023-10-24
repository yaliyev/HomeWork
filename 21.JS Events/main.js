const todo = document.getElementById('todo');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const error = document.getElementById('error');
const clearAll = document.getElementById('clearAll');

addButton.addEventListener('click', function() {
    const text = todo.value.trim();

    if (text === '') {
        error.style.display = 'block';
        return;
    }

    error.style.display = 'none';
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
    `;
    todoList.appendChild(li);
    todo.value = '';
});

