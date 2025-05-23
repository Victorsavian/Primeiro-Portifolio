function acende() {
    var img = document.querySelector('img#img')
    img.style.border = '5px solid white'
}

function apaga() {
    var img = document.querySelector('img#img')
    img.style.border = '5px solid rgb(26, 25, 25)'
}

function enviar() {
    txtnome = document.querySelector('input#txtnome')
    nome = txtnome.value
    alert(`${nome}, assim que possível seu recado será lido. \u{1F48C}`) //código do emoji é U+1F48C
}