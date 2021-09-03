function hola(nombre, micallback) {

    console.log('Hola soy asincrona');
    setTimeout(function() {
        console.log('hola, ' + nombre);
        micallback();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adiíos' + nombre);
    }, 1000);
}

console.log('Iniciar proceso');
hola('Manuel', function() {
    adios('Manuel', function() {
        console.log('termino proceso');
    });

});