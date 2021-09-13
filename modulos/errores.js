function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function() {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en la funcion asincrona');
            cb(err);
        }

    })
}


try {
    seRompeAsincrona(function(err) {
        console.log(err.message);
    });
} catch (err) {
    console.error('Algo se ha roto');
    console.error(err.message);
    console.log('pero no pasa nada lo hemos capturado');
}

console.log('esto de aqui esta al final');