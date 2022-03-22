/*const express = require("express");
const http = require('http');

const routesUsuario = require('./api/routes/usuariosRoutes');
const routesSolicitacao = require('./api/routes/solicitacoesRoutes');

require('./database/indexdb.js');

const app = express();

app.set('url','http://localhost:');
app.set('porta',3333);

app.use(express.json());

app.use(routesSolicitacao);
app.use(routesUsuario);

http.createServer(app).listen(app.get('porta'),function(){
    console.log('\nServidor Rodando em ' + app.get('url') + app.get('porta'));
})
*/

const express = require('express')
const cors = require('cors')

const routesUsuario = require('./api/routes/usuariosRoutes');
const routesSolicitacao = require('./api/routes/solicitacoesRoutes');

require('./database/indexdb.js');

const app = express()
app.use(cors())

app.use(express.json())

app.use(routesSolicitacao);
app.use(routesUsuario);

app.listen(3333)