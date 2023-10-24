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
        <span class="text">${text}</span>
        <button class="delete"><i id="deleteButton" class="bi bi-trash"></i></button>
    `;
    todoList.appendChild(li);
    todo.value = '';
    const todoItems = todoList.getElementsByTagName('li');
    taskCount(todoItems.length);
});

todoList.addEventListener('click', function(event) {
    if (event.target.id === 'deleteButton') {
        const confirmDelete = confirm('Are you sure to delete?');
        if (confirmDelete) {
            event.target.parentElement.parentElement.remove();
        }
    }
});

clearAll.addEventListener('click', function() {
    const todoItems = todoList.getElementsByTagName('li');
    if (todoItems.length === 0) {
        alert('No ToDo items.');
        return;
    }

    const confirmDelete = confirm('Are You Sure To Delete All Your Lists?');
    if (confirmDelete) {
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }
        taskCount(0);
    }
});

function taskCount(count) {
    const taskCountElement = document.getElementById('listCount');
    taskCountElement.textContent = `You have ${count} pending tasks`;
}
