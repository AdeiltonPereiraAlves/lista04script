// import {somar} from './modulo'
import * as operacao from './lista.js'
const lista = []
export {lista}
class Produtos{
    constructor(id, nome, preco){
        this.id = id
        this.nome = nome
        this.preco = preco
        this.comprado = false;
    }
}

const itemInput = document.querySelector('#item')
const precoInput = document.querySelector('#preco')
const adicionar = document.querySelector('#add')


const tbody = document.querySelector('tbody')

// função para adicionar um linha na tabela com todas as informações
function saveList(obj){
    const tr = document.createElement('tr')
    tr.classList.add('linha')
    const td = document.createElement('td')
    td.innerText = obj.nome;
    const td2 = document.createElement('td')
    td2.innerText = obj.preco;
    const td3 = document.createElement('td')
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('cheked')
    checkbox.addEventListener('change',() => {
       
                if(checkbox.checked){
                    operacao.marcar(td)
                    operacao.marcar(td2)
                    obj.comprado = true;
                }else{
                   operacao.desmarcar(td)
                   operacao.desmarcar(td2)
                   obj.comprado = false;
                }
        
        
        
    })
    td3.appendChild(checkbox)
    const td4 = document.createElement('td')
    const remover = document.createElement('button')
    remover.addEventListener('click',(e) => {
            e.preventDefault()
            tbody.removeChild(tr)
            operacao.remover(obj)
           
    }) 
    td4.appendChild(remover)

    remover.textContent = 'Remover'
    
    tr.appendChild(td)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tbody.appendChild(tr)
    console.log(tr)

}
// Carrega toda a lista da local storage
function exibir(){
    const resultado = operacao.listar()
    tbody.innerHTML = '';
    resultado.forEach((item) => {
        saveList(item)
    })
} 

// evento que add o objeto na lista
adicionar.addEventListener('click', (e) => {
    e.preventDefault();
    const item = itemInput.value;
    const preco = precoInput.value;
    itemInput.value = ''
    precoInput.value = ''
    const novoProduto = new Produtos()
   
    novoProduto.nome = item;
    novoProduto.preco = preco;
    console.log(novoProduto)
    operacao.adicionar(novoProduto)
    
   
   
    exibir()
})
exibir()