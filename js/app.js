/*
Js esta diseñado en un paradigma simple basado en objetos.
-> un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre y un valor
.
-> el valor de una propiedad puede ser una función, en cuto caso la propiedad es conocida como un método
.
-> los objetos son similares a los arrays, excepto que en lugar de usar índices para acceder y moficiar sus datos, accedes a los datos en objetos a través de propiedades (properties)

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects

*/

/*
Objeto literal
.
-> se denomina asi al objeto cuyas propiedades están declaradas textualmente en el código.
*/
const gato = {
    nombre: "guruguru",
    duerme: true,
    edad: 1,
    enemigos: ["agua", "perros"]
}

/*
Acceder a los valores
.
-> Notación de punto:
*/
//Acceder a la propiedad nombre del objeto gato
console.log(gato.nombre);
////Acceder a la propiedad duerme del objeto gato
console.log(gato.duerme);
//Acceder a la propiedad enemigos del objeto gato
console.log(gato.enemigos);

//-> Notacion de corchetes (me servira para recorrerlo)

console.log(gato['nombre']);
console.log(gato['edad']);
console.log(gato['enemigos']);

//CRUD (propiedades)
//-> crear (create)
gato['nombre']
// Leer (read)
console.log(gato)
// Actualizar (update)
gato.edad = 11
// Eliminar (delete)
delete gato.duerme

// hasOwnProperty
// A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el método .hasOwnProperty(propname) para determinar si un objeto tiene una propiedad con ese nombre. .hasOwnProperty() devuelve true o false si se encuentra la propiedad o no.
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}

console.log(gato.hasOwnProperty("nombre"))
console.log(gato.hasOwnProperty("salud"))

// Objetos anidados
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
}
// Acceder:
console.log(gato.otros.amigos[0])
console.log(gato.otros.favoritos.comida.fria)

// Encadenamiento opcional
// Optional chaining (opens new window): El operador de encadenamiento opcional ?. permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida.
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
};
console.log(gato.otros.favoritos);


// Encadenamiento opcional: resultado undefined.
console.log(gato.otros?.favoritos);



// Propiedades: llevan paréntesis
const frutas = ["sandía", "pera", "melon"];
console.log(frutas.length);
// Métodos: no llevan paréntesis
const frutass = ["sandía", "pera", "melon"];
frutas.push("banana");
console.log(frutas);

// Métodos
// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//    *  *  *  *  *  *  *  *  *  *
//     comer: function () {
//         console.log("Ahora está comiendo");
//     },
//    *  *  *  *  *  *  *  *  *  *
// };

// gato.comer();

// Reducido
// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//    *  *  *  *  *  *  *  *  *  *
//     comer() {
//         console.log("Ahora está comiendo");
//     },
//    *  *  *  *  *  *  *  *  *  *
// };

// gato.comer();

// Reducido y con parámetros
// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//    *  *  *  *  *  *  *  *  *  *
//     comer(comida) {
//         return "Ahora está comiendo: " + comida;
//     },
//    *  *  *  *  *  *  *  *  *  *
// };

// console.log(gato.comer("pez"));

// ¿Qué pasará con esto?

// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     comer(comida) {
//         return `${nombre} está comiendo ${comida}`;
//     },
// };

// console.log(gato.comer("pez"));

// En este caso esta buscando los valores del interpolado en el hambito global y no en el scope objeto, por lo tanto no estria mostrando los valores del objeto

// this

// this: Hace referencia al objeto contexto de JavaScript en el cual se está ejecutando el código actual, osea que lo esta haciendo dentro el objeto garo 

// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     comer(comida) {
//         return `${this.nombre} está comiendo ${comida}`;
//     },
// };

// console.log(gato.comer("pez"));

// arrow function
// ¿Esto funcionará?

// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     comer: (comida) => {
//         return `${this.nombre} está comiendo ${comida}`;
//     },
// };

// console.log(gato.comer("pez"));
// Arrow Functions

// No tiene this o super y no se debe usarla como métodos.
// Pero si puedo utilizarla en su interior:

// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     comer(comida) {
//         return `${this.nombre} está comiendo ${comida}`;
//     },
//    *  *  *  *  *  *  *  *
//     mostrarEnemigos() {
//         return this.enemigos.forEach((item) => console.log(item));
//     },
//    *  *  *  *  *  *  *  *
// };

// gato.mostrarEnemigos();

//Recorrer un objeto
// --> for in: La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas

// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
// };

// for (const propiedad in gato) {
//     console.log(gato[propiedad]);
// }

// ¿Por qué usar for...in?
// --> Dado que for...in está construido para iterar propiedades de objeto, no se recomienda su uso con arreglos y opciones como Array.prototype.forEach() y existe for...of, ¿cuál podría ser el uso de for...in?
// --> Es posible que se utilice de forma más práctica con fines de depuración, ya que es una forma fácil de comprobar las propiedades de un objeto (mediante la salida a la consola o de otro modo)
// --> Aunque los arreglos suelen ser más prácticos para almacenar datos, en situaciones en las que se prefiere un par clave-valor para trabajar con datos (con propiedades que actúan como la "clave"), puede haber casos en los que desees comprobar si alguna de esas claves cumple un valor particular

// Object.values()
// --> Object.values() (opens new window): devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.

// console.log(Object.values(gato));
// Con forEach()

// Object.values(gato).forEach((item) => console.log(item));

// Destructuring Objects
// --> desestructuración (opens new window)La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["Cobarde", "Tímido", "Pegajoso"],
//         favoritos: {
//             comida: {
//                 fria: "salmón",
//                 caliente: "pollo",
//             },
//         },
//     },
// };

// const nombreGato = gato.nombre;
// console.log(nombreGato);
// Destructuring de objetos:

// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["Cobarde", "Tímido", "Pegajoso"],
//         favoritos: {
//             comida: {
//                 fria: "salmón",
//                 caliente: "pollo",
//             },
//         },
//     },
// };

// const { nombre, duerme, edad, enemigos } = gato;
// console.log(nombre);
// console.log(duerme);
// console.log(edad);
// console.log(enemigos);

// Alias:

// const { nombre: nombreGato } = gato;
// console.log(nombreGato);
// por defecto:

// const gato = {
//     // nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["Cobarde", "Tímido", "Pegajoso"],
//         favoritos: {
//             comida: {
//                 fria: "salmón",
//                 caliente: "pollo",
//             },
//         },
//     },
// };

// const { nombre: nombreGato = "Sin nombre" } = gato;
// console.log(nombreGato);


// Anidados:

// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["Cobarde", "Tímido", "Pegajoso"],
//         favoritos: {
//             comida: {
//                 fria: "salmón",
//                 caliente: "pollo",
//             },
//         },
//     },
// };

// const {
//     otros: { amigos },
// } = gato;
// console.log(amigos);

// Array

// La destructuring también sirve para Array, solo reemplazar por []

// const enemigos = ["agua", "perros"]
// const [agua, perro] = enemigos;
// console.log(agua);
// console.log(perro);

// Getters y Setters
// --> get (opens new window): Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.
// --> set (opens new window): La sintaxis set asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.
// -> GET: Tenga en cuenta lo siguiente al trabajar con la sintaxis get:
// Debe tener exactamente cero parametros.
// No debe haber múltiples getters para una misma propiedad.
// -> SET: Tenga en cuenta lo siguiente al trabajar con setters:
// Debe tener exactamente un parámentro

// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     comer(comida) {
//         return `${this.nombre} está comiendo ${comida}`;
//     },
//     get nombreMayuscula() {
//         return this.nombre.toUpperCase();
//     },
//     set nuevoEnemigo(nuevo) {
//         this.enemigos.push(nuevo);
//     },
// };

// // GET
// console.log(gato.nombreMayuscula);

// // SET
// gato.nuevoEnemigo = "batman";
// console.log(gato.enemigos);

// por valor vs por referencia

// --> por valor: Cuando asignamos valores primitivos (Boolean, Null, Undefined, Number, String y Symbol), el valor asignado es una copia del valor que estamos asignando.
// --> por referencia: Pero cuando asignamos valores NO primitivos o complejos (Object, Array y Function), JavaScript copia “la referencia”, lo que implica que no se copia el valor en sí, si no una referencia a través de la cual accedemos al valor original.