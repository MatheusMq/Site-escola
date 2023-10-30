var elementosSobre = document.querySelectorAll('.sobreA')

elementosSobre.forEach(function (sobreA) {
    sobreA.addEventListener('click', function(){
        sobreA.classList.toggle('ativa')
    })
})
