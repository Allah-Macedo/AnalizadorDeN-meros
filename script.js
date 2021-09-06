const list = []
const tabela = document.querySelector('#tabela')
const getNumber = document.querySelector('#number')

const adiciona = document.querySelector('#adiciona')
adiciona.addEventListener('click',adicionar)

function isNumber(n) {
    if (n >= 1 && n <= 100) {
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
    if (isNumber(getNumber.value) && !inList(getNumber.value , list)) {
        list.push(Number(getNumber.value))
        let option = document.createElement('option')
        option.innerHTML +=  `Adicionado o número ${getNumber.value}`
        tabela.appendChild(option)
    }else {
        alert('[ERRO] Número inválido ou já na lista. Adicione um número válido .')
    }
    getNumber.value = ''
    getNumber.focus()
}


const finaliza = document.querySelector('#finaliza')
finaliza.addEventListener('click',finalizar)

function finalizar() {
    if (tabela.length !== 0) {
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
        bloco003.innerHTML += `<p>Total de números cadastrados ${total}</p>`
        bloco003.innerHTML += `<p>Maior número cadastrado ${maior}</p>`
        bloco003.innerHTML += `<p>Menor número cadastrado ${menor}</p>`
        bloco003.innerHTML += `<p>Soma dos número cadastrado ${soma}</p>`
        bloco003.innerHTML += `<p>Media dos número cadastrado ${media}</p>`
    }else {
        alert('[ERRO Lista vasia , adicione algum valor na lista.')
    }
}