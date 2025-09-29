// textos

const Observadortextos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-text')
        } else {
            entry.target.classList.remove('show-text')
        }
    })
})

const textos = document.querySelectorAll('.hidden-text')

textos.forEach((elemento) => Observadortextos.observe(elemento))

// cards

const Observadorcards = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-cards')
        } else {
            entry.target.classList.remove('show-cards')
        }
    })
})

const cards = document.querySelectorAll('.hidden-cards')

cards.forEach((elemento) => Observadorcards.observe(elemento))

// 3 cards

const Observador3cards = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-cards-3')
        } else {
            entry.target.classList.remove('show-cards-3')
        }
    })
})

const cards3 = document.querySelectorAll('.hidden-cards-3')

cards3.forEach((elemento) => Observador3cards.observe(elemento))