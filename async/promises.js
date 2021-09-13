//Promesas son clases global

const { reject } = require("q");

function hola(nombre, micallback) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('hola, ' + nombre);
            resolve(nombre);
        }, 1000)
    });

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla');
            //resolve(nombre);
            reject('Hay un error');
        }, 100)
    })

}

function adios(nombre, otroCallback) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    })

}
//Siempre que usas promesas recuerda usar un catch siempre que haya un then
console.log('Iniciando');
hola('Manuel')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('terminado el proceso');
    })
    .catch(error => {
        console.error('Ha habido un error ' + error);
    })