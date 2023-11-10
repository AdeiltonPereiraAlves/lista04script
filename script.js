// import {somar} from './modulo'
import * as operacao from './lista.js'
const lista = []
export {lista}
class Produtos{
    constructor(id, nome, preco){
        this.id = id
        this.nome = nome
        this.preco = preco
        this.comprado = true;
    }
}

const itemInput = document.querySelector('#item')
const precoInput = document.querySelector('#preco')
const adicionar = document.querySelector('#add')


const tbody = document.querySelector('tbody')
const thead = document.querySelector('thead')
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
    checkbox.addEventListener('change',() => {
       
                if (checkbox.checked) {
                    td.style.textDecoration = 'line-through';
                    td2.style.textDecoration = 'line-through';
                } else {
                    td.style.textDecoration = 'none';
                    td2.style.textDecoration = 'none';
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
function exibir(){
    const resultado = operacao.listar()
    tbody.innerHTML = '';
    resultado.forEach((item) => {
        saveList(item)
    })
} 
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