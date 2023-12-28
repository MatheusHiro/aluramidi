const key = document.querySelectorAll('.tecla');
const sound = document.querySelectorAll('audio');
function playKey(key_id) {
    const element = document.querySelector(key_id);

    if (element === null || element.localName != 'audio') {
        console.log('Element not found or not valid');
    } else {
        element.play();
    }
};




key.forEach((tecla, index) => {

    const teclaName = tecla.classList[1]
    const teclaToPlay = `#som_${teclaName}`

    tecla.onclick = function () { playKey(teclaToPlay); }
    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa')

        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
})

