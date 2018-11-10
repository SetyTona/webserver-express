// http, ya viene en el node, no hace falta que lo instalemos con 
// npm install. Podemos ver la ayuda en nodejs.com --> Docs --> API --> HTTP
const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
                nombre: 'fernando',
                edad: 32,
                url: req.url
            }
            // Ejemplo de llamada:
            // http://localhost:3030
            // http://localhost:3030/data/usuario1
        res.write(JSON.stringify(salida));
        // res.write('Hola Mundo');
        res.end();
    })
    .listen(3030);

console.log('Escuchando el puerto 3030');