let theaterkader = document.querySelector('.Theater')
let DoekL = document.querySelector('#DoekL')
let DoekR = document.querySelector('#DoekR')
let Maan = document.querySelector('#Maan')

console.log(theaterkader, DoekL, DoekR, Maan)

theaterkader.addEventListener('mouseenter', open)

function open() {
    DoekL.classList.add('DoekLAnimatie')
    DoekR.classList.add('DoekRAnimatie')
    Maan.classList.add('MaanAnimatie')

}
    theaterkader.addEventListener('mouseleave', close)

function close() {
    DoekL.classList.remove('DoekLAnimatie')
    DoekR.classList.remove('DoekRAnimatie')
    Maan.classList.remove('MaanAnimatie')
}


const theater = document.querySelector('.Theater')
const layers = document.querySelectorAll('.frontlayer, .midlayer, .backlayer, .midoblayer')

theater.addEventListener('mousemove', (e) => {
    const rect = theater.getBoundingClientRect()

    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height

    layers.forEach(layer => {
        let depth = 0

        if (layer.classList.contains('backlayer')) depth = 10
        if (layer.classList.contains('midlayer')) depth = 20
        if (layer.classList.contains('midoblayer')) depth = 30
        if (layer.classList.contains('frontlayer')) depth = 60

        layer.style.transform =
            `${layer.dataset.baseTransform} translate(${x * depth}px, ${y * depth}px)`
    })
})

layers.forEach(layer => {
    layer.dataset.baseTransform =
        getComputedStyle(layer).transform === 'none'
            ? ''
            : getComputedStyle(layer).transform
})
