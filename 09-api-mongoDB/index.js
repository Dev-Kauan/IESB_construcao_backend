require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
    res.json("Hello");
});

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@databaseapi.ux8vp7e.mongodb.net/?retryWrites=true&w=majority&appName=databaseAPI`)
    .then(() => console.log("Conectado ao meu banco de dados!"))
    .catch(err => console.log("Erro ao conectar!"))

app.listen(3000, () =>{
    console.log("Aplicação rodando!");
});