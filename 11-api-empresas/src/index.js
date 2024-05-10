const express = require('express');
const app = express();
// configuração de middleware
app.use(express.json());

//importando rotas
const router = require('./routes/routes');
app.use(router);
const db = require('./db/connection');
db()

app.listen(3000, () => {
    console.log("Aplicação rodando!")
})