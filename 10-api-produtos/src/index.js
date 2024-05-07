const express = require('express');
const dbConnection = require('./db/connection')
const routes = require('./routes/routes');

const app = express();
app.use(express.json())
app.use(routes)


app.listen(3000, () => {
    dbConnection()    
    console.log("Aplicação rodando!");
})