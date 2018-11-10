const port = process.env.PORT || 3000;

const express = require('express');
const app = express();
const hbs = require('hbs');
// Sólo queremos que se ejecute el codigo del fichero helpers
// por lo tanto, no hace falta ponerlo en una variable
// ejecutamos directamente el require y ya se carga el codigo
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

// Express HBS (npm install hbs --save)
app.set('view engine', 'hbs');



// Para ver el index en la web, vasta con poner:
// localhost:3000

// Para ver el home en la web, es necesario poner:
// localhost:3000/home.html
// sin el .html, no funciona

app.get('/', function(req, res) {
    res.render('home.hbs', {
        nombre: 'josEp picAñol'
            // ,anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {
    res.render('about.hbs');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});