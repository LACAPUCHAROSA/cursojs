
let cantItems = prompt("Cuantas prendas queres comprar?")

cantItems = parseInt(cantItems)

for (let i = 0; i < cantItems; i++) {

    //Template String
    let talle = prompt(`Que talle queres que sea el item ${i + 1}`)

    //El while entra y se qieda dando vueltas con condicion TRUE, con FALSE se va o nunca entra
    while (talle.toUpperCase() !== "S" &&
        talle.toUpperCase() !== "M" &&
        talle.toUpperCase() !== "L" &&
        talle.toUpperCase() !== "XL" &&
        talle.toUpperCase() !== "XXL") {

        talle = prompt(`Que talle queres que sea el item? ${i + 1} Tiene que ser S,M,L,XL,XXL`)
    }

}

const miCompra = [
    { nombre: 'camisa', Precio: 2000 },
    {nombre: 'jean', Precio: 3900 },
    {nombre: 'Sweter', Precio: 3500 },
]

const total = miCompra.reduce ((acc, el) =>acc + el.Precio, 0)

console.log (total)


let Descuento = 15;

let TotalCompra = resta (multiplicar (total, cantItems), multiplicar (Descuento (total ,Descuento), cantItems));;

console.log ('El total de tu compra es: ${TotalCompra}');
