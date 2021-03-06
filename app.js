// *Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//*Event Listner
todoButton.addEventListener("click",addTodo);
todoList.addEventListener('click' ,deleteCheck);
filterOption.addEventListener("click",filterTodo);

function addTodo(event)
{
    // *This will stop browser from default submiting 
    event.preventDefault();

    //* adding todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //* create li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //*Check done button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    //*Check Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //*appending to the Html page
    todoList.appendChild(todoDiv);

    // *Delete form input value 
    todoInput.value = '';
}
function deleteCheck(e)
{
    const item = e.target;
    // *DELETE 
    if(item.classList[0] === 'trash-btn')
    {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionEnd", function()
        {
        todo.remove();
        });
    }

    // *CHECK 
    if(item.classList[0] === 'completed-btn')
    {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    TODO /*want to fix bug in adding todo completed class and want to fix while class fall*/ 
}

function filterTodo(e)
{
    const todos = todoList.childNodes;
    console.log(todos);
}