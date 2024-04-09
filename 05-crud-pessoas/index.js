const express = require('express');
const app = express();

const pessoas = require('./routes/pessoas');
app.use(pessoas);

app.use(express.json());




app.listen(3000, () => {
    console.log("API iniciado com sucesso!!")
})