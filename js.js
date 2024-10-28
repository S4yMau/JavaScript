/*
Variables
string = "Cadena de texto"
number = 10
boolean = true/false
undefined = variable declarada sin valor inicial
null = variable declarada como vacia
Nan = Not a Number (Cuando se intenta hacer una operacion aritmetica con una cadena de texto) 
*/

/*
var = Es la manera de iniciar una variable global
let = Crea una variable solamente en el ambito creado
const = una varaible que no puede ser modificada
 */

/*
let variable //Esta es una variable declarada sin inicializar (undefined)
const tiene que ser declarado y inicializadosi no tirara error
se pueden declarar muchas variables separadas por comas (,)
*/

/*
El scope es el alcance de las variables 
Y el hoisting dice que las variables tienen qeu ser creadas antes de ser llamadas (es indistinto para las funciones comunes)
*/

//prompt("Manera de pedir un dato al usuario, a modo de prueba")

/*
Operadores asignacion
=
+=
-=
*=
/=
%=
**=
Operadores aritmeticos
+
-
/
*
++
--
**
%
*/

/*
Concatenacion (+)
Forzar numeros a strings ""
usar ${variable} para escribir mejor los textos sin concatenar con el +. Esto se usa con los backticks `` (Ctrl + Alt + tecla cerrar llaves)
Tener en cuenta el escape de comillas. Si se abre con comilla simples no se puede volver a usar las comillas simples hasta cerrar la frase
*/

/*
Operadores de comparacion
Estos operadores devuelven un valor boolean
== es igua?
!= es distinto?
=== es estrictamente igual? estrictamente se refiere a que tambien sean el mismo tipo de dato
!== es estrictamente distinto?
> es mayor que?
>= es mayor o igual que?
< es menor que?
<= es menor o igual que?
*/

/*
Operadores Logicos
&& AND
|| OR 
! Lo contrario
*/

/*
camelCase. Esta nomenclatura se usa en JS
*/

/*
Condicionales
if (se ejecuta si es true){
    Bloque a ejecutar
}
else if (condicion opcional){
    Bloque a ejecutar opcionar
}
else {
    Bloque a ejecutar en caso de no cuplir con ninguna condicion
}
*/
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


function restaurante () {
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
restaurante()
