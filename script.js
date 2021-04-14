window.onload = function () {
    pegarFotos()
}

function mostarDogs(dogs) {
    document.getElementById('imagem__cachorro').innerHTML = `<img class='imagem__cachorro' src='${dogs.message}'>`
    console.log(dogs.status)
}

function pegarFotos() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(dogs => mostarDogs(dogs))


}