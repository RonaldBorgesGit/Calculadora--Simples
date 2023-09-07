const soma = document.getElementById('soma')
const subt = document.getElementById('subt')
const divi = document.getElementById('divi')
const mult = document.getElementById('mult')
const igual = document.getElementById('igual')
const res = document.getElementById('res')
const span = document.querySelector('span')

soma.addEventListener('click', function () {
    span.innerHTML = '+'
})

subt.addEventListener('click', function () {
    span.innerHTML = '-'
})

divi.addEventListener('click', function () {
    span.innerHTML = '÷'
})

mult.addEventListener('click', function () {
    span.innerHTML = 'x'
})

igual.addEventListener('click', function () {
    let num1 = document.getElementById('n1');
    let num2 = document.getElementById('n2');


    if (span.innerHTML == '+') {
        let result = `${Number(num1.value) + Number(num2.value)}`
        res.innerHTML = Number(result).toFixed(2)
    } else if (span.innerHTML == '-') {
        let result = `${Number(num1.value) - Number(num2.value)}`
        res.innerHTML = Number(result).toFixed(2)
    } else if (span.innerHTML == '÷') {
        let result = `${Number(num1.value) / Number(num2.value)}`
        res.innerHTML = Number(result).toFixed(2)
    } else if (span.innerHTML == 'x') {
        let result = `${Number(num1.value) * Number(num2.value)}`
        res.innerHTML = Number(result).toFixed(2)
    } else {
        let result = `${Number(num1.value) + Number(num2.value)}`
        res.innerHTML = Number(result).toFixed(2)
    }
})

// Dark mode e Light mode
const dark_mode = window.document.querySelector('#dark');
const light_mode = window.document.querySelector('#light');
const background = window.document.querySelector('body')
const sombra = window.document.querySelector('form')
dark_mode.addEventListener('click', dark)
light_mode.addEventListener('click', light)

function dark() {
    background.style.background = '#363636';
    sombra.style.boxShadow = '1px 2px 10px #ffffff'
}

function light() {
    background.style.background = '#e2f5fd';
    sombra.style.boxShadow = '1px 2px 10px #000000'
}