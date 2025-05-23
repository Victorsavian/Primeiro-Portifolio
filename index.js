function acende() {
    var img = document.querySelector('img#img')
    img.style.border = '5px solid white'
}

function apaga() {
    var img = document.querySelector('img#img')
    img.style.border = '5px solid rgb(26, 25, 25)'
}

function obrigado() {
    resp = document.querySelector('div.respemail')
    user = document.querySelector('input.nomecontato')
    resp.innerHTML = `${user}, assim que possível vou ler seu recado \u128140`
}