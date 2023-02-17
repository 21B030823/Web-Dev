const list = document.getElementById('todo_lists');
const btn = document.getElementById('todo_add_btn');
const inputAdd = document.getElementById('todos_input');

function addTodo(){
    const text = inputAdd.value;
    if(text === ""){
        return;
    }
    const li = document.createElement('li');
    li.classList.add('li-class');

    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';

    const added_text = document.createElement('p');
    added_text.classList.add('par');
    added_text.textContent = text;

    const del = document.createElement('span');
    del.setAttribute('id', 'del');
    del.innerHTML = "&cross;";

    li.appendChild(checkbox);
    li.appendChild(added_text);
    li.appendChild(del);
    list.append(li);

    inputAdd.value = '';
}


list.addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    if(e.target.tagName === "INPUT"){
        console.log(e.target.classList);
        if(e.target.parentElement.classList.contains('lined')){
            e.target.parentElement.classList.remove('lined');
        }
        else e.target.parentElement.classList.add('lined');
    }
})

btn.addEventListener('click', addTodo);
inputAdd.addEventListener('keypress', function (e) {
    if(e.key === 'Enter'){
        addTodo();
    }
})