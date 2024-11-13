//Primer entrega

/*function pedirEmpanadas () {
    let plata = prompt(`Cuanta plata tenes para las empandas?`)

    if (plata >= 10000) {
    alert(`Te alcanza para una docena y te sobran ${plata - 10000}$`)
    }
    else if (plata < 10000 && plata >= 5500) {
    alert(`Te alcanza para media docena y te sobran ${plata - 5500}$`)
    }
    else if (plata < 5500 && plata > 1999) {
        let pedido = prompt(`Cada empanada sale 1000$, cuantas queres?`)
        let valorEmpanadas = 1000 * pedido
        alert(`${pedido} empanadas te salen ${valorEmpanadas} y te sobran ${plata - valorEmpanadas}$`)
    }
    else if (plata < 2000 && plata >=1000){
        alert(`te alcanza para una sola empanada y te sobra ${plata - 1000}`)
    }
    else {
        alert(`No te alcanza para ninguna empanada o ingresaste mal los numeros`)
    }
}
pedirEmpanadas()*/


/* function restaurante () {
    let personas = prompt(`Bienvenidos a el restaurant Boquense, mesa para cuantos?`)
    let hayPlatoValido = false
    for (let i = 0; i < personas; i++) {
        let plato = prompt(`Que desean comer? (Elija el numero del plato)\n Pedido ${i + 1}\n 1: Milanesa con pure \n 2: Pastel de papa \n 3: Parrilada para ${personas - i} personas `)
        if (plato == 3) {
            alert(`Parrillada para ${personas - i} en marcha`)
            hayPlatoValido = true
            break
        }
        else if (plato == 2) {
            alert(`Pastel de papa en marcha`)
            hayPlatoValido = true
        }
        else if (plato == 1) {
            alert(`Milanesa con pure en marcha`)
            hayPlatoValido = true
        }
        else {
            alert(`No contamos con ese plato en el menu de hoy, gracias por venir`)
        }
    }
    if (hayPlatoValido) {
        alert(`Pedido servido, provecho`)
    }
}
restaurante() */

//Segunda entrega
let kevin = {id: 1,
            nombre: `Kevin `,
            precio: 10500,
            importado: false
}
let chesterIce = {id: 2,
    nombre: `Chester Ice`,
    precio: 8000,
    importado: false
}
let colbert = {id: 3,
    nombre: `Colbert`,
    precio: 9000,
    importado: false
}
let tascani = {id: 4,
    nombre: `Tascani singular`,
    precio: 15000,
    importado: false
}
let boss = {id: 5,
    nombre: `Boss Intense`,
    precio: 18000,
    importado: false
}
let laMartina = {id: 6,
    nombre: `La Martina`,
    precio: 13000,
    importado: false
}
let alliance = {id: 7,
    nombre: `Alliance `,
    precio: 12000,
    importado: false
}
let oneMillion = {id: 8,
    nombre: `One Million`,
    precio: 11000,
    importado: true
}
let halloween = {id: 9,
    nombre: `Halloween`,
    precio: 40000,
    importado: true
}
const perfumes = [kevin , chesterIce , colbert , tascani , boss , laMartina , alliance , oneMillion , halloween]

function buscarPerfume(idPerfume) {
    return perfumes.find(perfume => perfume.id == idPerfume)
}
function filtroImportados() {
    return perfumes.filter(perfume => perfume.importado == true)
}
function filtroPrecios(precioMaximo) {
    return perfumes.filter(perfume => perfume.precio <= precioMaximo )
}
let menuPrincipal = prompt(` MENU PRINCIPAL \n 1: Buscar perfume \n 2: Ver perfumes importados \n 3: Elegir rango de precio`)

if (menuPrincipal == 1) {
    let elegirPerfume = prompt(`Que perfume estas buscando?\n Marque la opcion numerica: \n 1: Kevin \n 2: Chester Ice \n 3: Colbert \n 4: Tascani \n 5: Boss \n 6: La Martina \n 7: Alliance \n 8: One Million \n 9: Halloween`)
    if (buscarPerfume(elegirPerfume) != undefined) {
        console.log(buscarPerfume(elegirPerfume))
    }
    else {
        alert(`Opcion ingresada incorrecta: Recargue la pagina`)
    }
    
} 
else if (menuPrincipal == 2) {
    console.log(filtroImportados())
}
else if (menuPrincipal == 3) {
    let elegirPrecio = prompt(`Ingresar precio maximo del perfume`)
    console.log(filtroPrecios(elegirPrecio))
}
else{
    alert(`Opcion ingresada incorrecta: Recargue la pagina `)
}




