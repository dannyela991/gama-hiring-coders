// LISTA DE TAREFAS

const listContainer = document.querySelector('[data-lists]') //capturar elementos do html
const newListForm = document.querySelector('[data-new-list-form]') 
const newListInput = document.querySelector('[data-new-list-input]')

let lists = [] 

// função para ativar o botão/ligar eventos com dois parametros/ tipo de evento submit / segundo parametro será uma função 'callback'.
newListForm.addEventListener('submit', function(e){ 
    e.preventDefault() //desativar a atualização do navegador
    const listName = newListInput.value //capturar o valor do input

    //verificação para interromper processo, caso não tenha nada no input
    if(listName === null || listName === '') return

    const list = createList(listName) // criar a lista
    newListInput.value = null // limpar o input
    lists.push(list) // incluir intem no array
    render() //Mostrar itens na tela com a função render
})

function createList(name){
    return{id: Date.now().toString(), name }
}

//FUNÇÃO RENDER, MOSTRAR ITENS NA TELA //percorrer a lista, criar os itens
function render(){
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('li') //criar um elemento no html
        item.classList.add('item') //colocar classe no item
        item.innerText = list.name // qual o conteúdo que ele vai receber
        listContainer.appendChild(item)    // Qual elemento do html que ele vai ficar
    })    
}


//Limpar elemento
function clearElement(element){
    while(element.firstChild){ 
        element.removeChild(element.firstChild)
    }
}

//FIM LISTA DE TAREFAS

