function hola(nombre, micallback) {

    console.log('Hola soy asincrona');
    setTimeout(function() {
        console.log('hola, ' + nombre);
        micallback(nombre);
    }, 1000)
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('bla bla bla bla');
        callbackHablar();
    }, 100)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

// console.log('Iniciar proceso');
// hola('Manuel', function(nombre) {
//     adios(nombre, function() {
//         console.log('Terminamos');
//     });
// });

function convesacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            convesacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback)
    }

}

console.log('Iniciamos proceso....');
hola('Manuel', function(nombre) {
    convesacion(nombre, 3, function() {
        console.log('Proceso terminado');
    })
})

// hola('Manuel', function(nombre) {
//     hablar(function() {
//         hablar(function() {
//             hablar(function() {
//                 adios(nombre, function() {
//                     console.log('termino proceso');
//                 });
//             })
//         })

//     });
// });