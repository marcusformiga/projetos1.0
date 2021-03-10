// ver a estrutura html e saber o que vamos fazer com ela
let inputTask = document.getElementById("task")
//console.log(inputTask)
let btnTask = document.getElementById("btn")
//console.log(btnTask)
let listTask = document.getElementById("list")
//console.log(listTask)

let tasks = JSON.parse(localStorage.getItem("tarefas")) || []

function renderTasks(){
    // limpar a listagem da lista antes de renderizar a tela
    list.innerHTML = ' '
    for(task of tasks){
        let itemList = document.createElement('li')
        itemList.setAttribute('class', 'list-group-item list-group-item-action')
        itemList.onclick = () =>{removeTasks(this)}
        let itemText = document.createTextNode(task)
        itemList.appendChild(itemText)
        list.appendChild(itemList)

    }
}

renderTasks()


btnTask.onclick = () =>{
    let newTask = inputTask.value
    if(newTask !== " "){
        tasks.push(newTask)
        renderTasks()
        inputTask.value = " "
        removeSpans()
        saveTasks()
    }else{
        removeSpans()
        let card = document.querySelector('.card')
        let span = document.createElement("span")
        span.setAttribute("class", "alert alert-warning")
        let msg = document.createTextNode("Você precisa informar uma tarefa")
        span.appendChild(msg)
        card.appendChild(span)
    }
    
}

function removeSpans(){
    let spans = document.querySelectorAll('span')
    let card = document.querySelector('.card')

    for(let i = 0; i< spans.length; i++){
        card.removeChild(spans[i])
    }
}

function removeTasks(task){
    tasks.splice(tasks.indexOf(task.textContent), 1)
    renderTasks()
    saveTasks()

}

function saveTasks(){
    localStorage.setItem("tarefas", JSON.stringify(tasks))
}