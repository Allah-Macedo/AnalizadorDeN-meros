const numero = document.querySelector('#number')
const adicina = document.querySelector('#adiciona')
adicina.addEventListener('click',adicionar)
const list = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inList(n,l) {
    
}

function adicionar() {
    if (isNumber(numero.value)) {
        alert('É numero.')
    }else {
        alert('Não é numero.')
    }
}

const tabela = document.querySelector('#tabela')
const finaliza = document.querySelector('#finaliza')
finaliza.addEventListener('#finaliza')

function finalizar() {
    
}
