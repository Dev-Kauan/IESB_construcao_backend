const express = require('express');
const app = express();

const produtos = require('./routes/produtos');

app.use(express.json());
app.use(produtos);



app.listen(3000, () => {
    console.log("API iniciado com sucesso!!")
})
