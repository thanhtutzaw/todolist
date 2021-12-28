//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const classbtn = document.getElementsByClassName('todo-button::after');
// const button = document.querySelector('.todo-button::after');
const todoSelect = document.querySelector('.filter-todo');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
todoSelect.addEventListener('click', filterTodo);

// todoButton.addEventListener('click',btn);
//functions
function addTodo(event) {

    event.preventDefault();

    //div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    //li 
    const newTodo = document.createElement('li');
    const inputValue = todoInput.value;
    if (inputValue.trim() == "") {
        alert('Write something');
    } else {

        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //check button
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add('complete-btn');
        todoDiv.appendChild(completeButton);

        //trash button 
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);

        todoInput.value = "";
    }
}

// function btn(){
//     classbtn.stye.setProperty("opacity","0");

// }

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
        // todo.remove();
    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.firstChild.classList.toggle('completed'); //fast child is important and idk why
        // todoList.classList.toggle('completed');


    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;

            case 'completed':
                if (todo.firstChild.classList.contains('completed')) {
                    todo.style.display = 'flex';

                }
                else {
                    todo.style.display = 'none';
                }
                break;

            case 'uncompleted':
                if (!todo.firstChild.classList.contains('completed')) {

                    todo.style.display = 'flex';

                }
                else {

                    todo.style.display = 'none';
                }
                break;

        }
    })

}