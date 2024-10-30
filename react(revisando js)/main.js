var page = document.getElementById('page');
var containerList = document.getElementById('container-list');
var lista = document.getElementById('lista');
let containerBtns = document.getElementById('btns');
// page.innerHTML = 'ok';

let btnInicio = document.getElementById('btn-inicio');
let btnLista = document.getElementById('btn-lista');
let btnAdd = document.getElementById('btn-add');

let marcas = ["Apple", "Google", "Microsoft", "Amazon", "Coca-Cola", "Samsung", "Nike", "Toyota", "Mercedes-Benz", "Facebook"];

btnInicio.addEventListener('click', function () {
    //  page.innerHTML = `<h1>Hello, World!</h1>`;
    containerList.style.display = 'none';
    page.style.display = 'block';

})

function showList(){
    lista.innerHTML = '';
    marcas.forEach((marca, index) => {
        lista.innerHTML += `
            <li>${marca}</li> 
            <button class="btn btn-primary btn-edit" data-index="${index}">Editar</button> 
            <button class="btn btn-primary btn-delete" data-index="${index}">Excluir</button>
   `;
    })    

    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', deleteItem);
    });

    document.querySelectorAll('.btn-edit').forEach(button => {
        button.addEventListener('click', editItem);
    });

}

// Função para excluir o item
function deleteItem(event) {
    const index = event.target.getAttribute('data-index');
    marcas.splice(index, 1); // Remove o item do array
    showList(); // Re-renderiza a lista atualizada
}

// Função para editar o item
function editItem(event) {
    const index = event.target.getAttribute('data-index');
    const novoNome = prompt("Digite o novo nome da marca:", marcas[index]);
    if (novoNome) {
        marcas[index] = novoNome; // Atualiza o item no array
        showList(); // Re-renderiza a lista atualizada
    }
}

function addItem(event){
    const novaMarca = prompt("Digite o nome da nova marca:");
    if (novaMarca) {
        marcas.push(novaMarca); 
        showList(); 
    }
}

btnAdd.addEventListener('click', addItem);


// Função para exibir a lista
btnLista.addEventListener('click', function () {

    containerList.style.display = 'block';
    page.style.display = 'none';

    showList();

    

})
