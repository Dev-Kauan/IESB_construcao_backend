const express = require('express');
const app = express();

app.use(express.json());

//rotas
const produtoRouter = require('./router/produtos');
app.use(produtoRouter);

app.listen(3000, () => {
    console.log("API INICIADA!!");
})

