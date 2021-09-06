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
    if (l.indexOf(Number(n)) !== -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if (isNumber(numero.value) && !inList(numero.value , list)) {
       const opt = document.createElement('option')
       list.push(Number(numero.value))
       opt.text = `Adicionado o numero ${numero.value}`
       tabela.appendChild(opt)
    }else {
        alert('[ERRO] Número inválido ou já na lista. Tente outro número .')
    }
    numero.value = ''
    numero.focus()
}

const tabela = document.querySelector('#tabela')
const finaliza = document.querySelector('#finaliza')
finaliza.addEventListener('click',finalizar)

function finalizar() {
   if (list.length == 0) {
       alert('[ERRO] Antes de finalizar adicione um número!')
   }else {
       let total = list.length
       let maior = list[0]
       let menor = list[0]
       let soma  = 0
       let media = 0

       for (const key in list) {
           soma += list[key]
           if (list[key] > maior) {
               maior = list[key]
           }
           if (list[key] < menor) {
               menor = list[key]
           }
       }
       media = soma / total
       const bloco003 = document.querySelector('#bloco003')
       bloco003.innerHTML = ``
       bloco003.innerHTML += `<p>Total de números cadastrados ${total}.</p>`
       bloco003.innerHTML += `<p>Maior número cadastrado ${maior}.</p>`
       bloco003.innerHTML += `<p>Menor número cadastrado ${menor}.</p>`
       bloco003.innerHTML += `<p>Soma dos número cadastrados ${soma}.</p>`
       bloco003.innerHTML += `<p>Média dos número cadastrados ${media}.</p>`
   }
}
