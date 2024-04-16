const express = require('express')
const app = express();

//Middlewares
app.use(express.json());

//Importações
const bmw = require('./router/carros');
app.use(bmw);


app.listen(3000, () => {
    console.log("APLICAÇÃO RODANDO!");
})