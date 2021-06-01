const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo => {
        addToDo(todo)
    });
}

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    addToDo();
});


function addToDo(todo)
{   let todoText=input.value;
    if(todo)
    {
        todoText=todo.text;
    }
    

    if(todoText)
    {
        const todoEle = document.createElement("li");
        if(todo && todo.completed)
        {todoEle.classList.add('completed');}
        todoEle.innerText=todoText;
        


        todoEle.addEventListener('click', () => {
            todoEle.classList.toggle("completed");

            updateLs();
        });
        
        todoEle.addEventListener('contextmenu',(e)=>{
            e.preventDefault();

            todoEle.remove();

            updateLs();
        });
        
        todosUL.appendChild(todoEle);

        input.value="";

        updateLs();
    }

}


function updateLs()
{
    const toDoEle = document.querySelectorAll('li');

    const toDos = [];

    toDoEle.forEach(toDoEle => {
        toDos.push({
            text: toDoEle.innerText,
            completed: toDoEle.classList.contains
            ('completed')
        });
    });

    localStorage.setItem("todos" , JSON.stringify(toDos));
}


