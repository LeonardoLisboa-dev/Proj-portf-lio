// título

const Observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elementos = document.querySelectorAll('.hidden')

elementos.forEach((elemento) => Observador.observe(elemento))

// texto

const Observador2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-2')
        } else {
            entry.target.classList.remove('show-2')
        }
    })
})

const elementos2 = document.querySelectorAll('.hidden-2')

elementos2.forEach((elemento) => Observador2.observe(elemento))