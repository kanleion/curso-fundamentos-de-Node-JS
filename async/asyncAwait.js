async function hola(nombre, micallback) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('hola, ' + nombre);
            resolve(nombre);
        }, 1000)
    });

}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla');
            //resolve(nombre);
            resolve('Hay un error');
        }, 100)
    })

}

async function adios(nombre, otroCallback) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    })

}

async function main() {
    let nombre = await hola('Manuel');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');

}
console.log('Empezamos el proceso');
main();
console.log('Vas  a ser la segunda instrucción');