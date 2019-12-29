const express = require('express'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');

const expressServer = express();
const router = require('./route');
const http = require('http');
const mongoose = require('mongoose');
//DB setup
mongoose.connect("mongodb+srv://jeremy:30722009@cluster0-nssmf.mongodb.net/test?retryWrites=true&w=majority", { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log("Connecté à Mlab"))
    .on('error', error => console.log("Erreur de connection à Mlab : ", error));
// App Setup
expressServer.use(morgan('combined'));
expressServer.use(bodyParser.json({type: '*/*'}));
// Server Setup
const port = 3090;
const server = http.createServer(expressServer);

router(expressServer);
server.listen(port);
console.log("Le serveur écoute sur le port : ", port);

