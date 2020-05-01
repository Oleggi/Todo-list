//Selectors
const todoInput = document.querySelector('.todo-input'); //shift+alt+arrow-down(ctrlc + ctrlv)
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
// const inputForm = document.querySelector('#form');



//Event listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(event) {
    event.preventDefault(); //Prevent form from submitting
    //Todo Div (li-item, 'checked', remove button)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check-mark btn
    const checkedBtn =document.createElement('button');
    checkedBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkedBtn.classList.add('cheked-btn');
    todoDiv.appendChild(checkedBtn);

    //Trash btn
    const trashBtn =document.createElement('button');
    trashBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);

    //Appendind Todo div to Ul
    if (todoInput.value.length >= 1) {
    todoList.appendChild(todoDiv);
    
    //Cleaning input field
    // inputForm.reset();
    todoInput.value = '';
    }
} 


function deleteCheck(event) {
    const item = event.target;
    //Deliting items
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fade-out');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    } 
    //Check mark
        if (item.classList[0] === 'cheked-btn') {
        const lineThrough = item.parentElement;
        lineThrough.classList.toggle('completed');
    }
    
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        switch(event.target.value) {
            case 'all':
                break;
            case 'completed':
                console.log('completed');
            case 'uncomplited':
                console.log('uncompleted');

        }
    })

}


