const numero = document.querySelector('#number')
const tabela = document.querySelector('#tabela')
const list = []

const adiciona = document.querySelector('#adiciona')
adiciona.addEventListener('click',adicionar)

const finaliza = document.querySelector('#finaliza')
finaliza.addEventListener('click',finalizar)

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
    if (isNumber(numero.value) && !inList(numero.value,list)) {
        list.push(Number(numero.value))
        const optione = document.createElement('option')
        optione.text  = `Adicionado o número ${numero.value}`
        tabela.appendChild(optione)
    }else {
         alert('[ERRO] Número inválido ou já na lista , adicione outro número.')
    }
    numero.value = ''
    numero.focus()
}


function finalizar() {
    if (list.length === 0) {
        alert('[ERRO] Você precisa adicionar algum número ante de finalizar .')
    }else {
        let total = list.length
        let maior = list[0]
        let menor = list[0]
        let media = 0 
        let soma = 0

        for (const key in list){
            soma += list[key]
            if (list[key] > maior){
                maior = list[key]
            }
            if (list[key] < menor) {
                menor = list[key]
            }
          }
          media = soma/total 
          let result = document.querySelector('#bloco003')
          result.innerHTML = ``
          result.innerHTML += `<p>Números cadastrado ${total}.</p>`
          result.innerHTML += `<p>Maior número cadastrado ${maior}.</p>`
          result.innerHTML += `<p>Menor número cadastrado ${menor}.</p>`
          result.innerHTML += `<p>Soma dos números cadastrados ${soma}</p>`
          result.innerHTML += `<p>Média dos valores ${media}.</p>`
        }
        
    }

/*
 <p>Total de números cadastrados : 10</p>
            <p>Maior valor cadastrado : 10</p>
            <p>Menor valor cadastrado : 0</p>
            <p>Soma dos valores : 20</p>
            <p>Média dos valores : 2</p>

* total de números adicionados
* maior valor 
* menor valor
* soma dos valores 
* média dos valores
*/