let contenedor = document.getElementById('contenedor')
const productos = [
    {titulo:'pantalon',precio:50000, stock:20},
    {titulo:'remeras',precio:35000, stock:20},
    {titulo:'camisas',precio:40000, stock:15}
]
productos.forEach((prod)=>{
    let card = document.createElement('div')
    card.classList.add('card')

    let h2 = document.createElement('h2')
    h2.textContent = prod.titulo

    let p = document.createElement('p')
    p.textContent = `$${prod.precio}`

    contenedor.append(card)
    card.appendChild(h2)
    card.appendChild(p)

})

