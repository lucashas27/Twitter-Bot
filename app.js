var app = require("./config/server.js"); //Importa o arquivo server.js
var yql = require('yql');
var cliente = require("./config/twitter.js"); //Importa o arquivo twitter.js


//Configura a porta disponível ou a porta 3000
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
//Configura o host disponível ou "0.0.0.0"
var server_host = process.env.YOUR_HOST || '0.0.0.0';



app.listen(server_port, server_host, function () {
    console.log("Aplicação online.");
});

app.get("/", function (req, res) {
    cliente.tweetar('test')
});