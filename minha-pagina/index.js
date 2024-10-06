let button = document.getElementById('button')
let texts = document.getElementsByClassName('title-red')

button.addEventListener('click', function() {
    button.textContent = "Button clicked!"
    for (let index = 0; index < texts.length; index++) {
        if(texts[index].tagName === 'H3') {
            texts[index].textContent = "Esse texto é um H3"
        } else if (texts[index].tagName === 'H1') {
            texts[index].textContent = "Esse texto é um H1"
            texts[index].style.color = "purple"
        } else {
            texts[index].textContent = "Texto alterado pelo JavaScript"
        }
    }
})