const input =document.getElementById('input');
        const todolist = document.getElementById('todoList');
        const btn = document.getElementById('add');
        let todos=[];

        //localStorage,coolies
        window.onload = ()=>{
            todos = JSON.parse(localStorage.getItem('todos')) || []
            todos.forEach(todo=>addtodo(todo))
        }
        btn.addEventListener('click',()=>{
            todos.push(input.value)
            localStorage.setItem('todos',JSON.stringify(todos))
            console.log(todos)
            addtodo(input.value);
            input.value=''
        })

        function addtodo(todo){
            let para = document.createElement('p')
            para.innerText = todo;
            todolist.appendChild(para);
            para.addEventListener('click',()=>{
                para.style.textDecoration='Line-through'
                remove(todo)
            })
            para.addEventListener("dblclick",()=>{
                todolist.removeChild(para)
                remove(todo)
            })
        }
        function remove(todo){
            let index = todos.indexOf(todo)
            if(index>-1){
            todos.splice(index,1)
            }
            localStorage.setItem('todos',JSON.stringify(todos))
        }