const express = require('express');
const app = express();

app.get('/', function(req, res) {
    //    res.send('Hola Mundo')

    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    }

    res.send(salida);
});

// Seria lo mismo que la anterior, pero declarando con una función fecha la llamada al GET
// app.get('/', (req, res) => {
//     res.send('Hola Mundo, con función de flecha !!!')
//   });


app.get('/data', function(req, res) {
    res.send('Hola Mundo >>> Data');
});


app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});