// Criando uma instância do modulo express
const express = require('express')
// Criando nossa aplicação
const app = express()

// Middleware -> intermediário
app.use('/', (req, res, next) => {
    console.log("PASSOU NO INTERMEDIÁRIO");
    console.log("Data: " + Date.now());
    next();
}) 

app.use(express.json())

app.get('/', (req, res) =>{
    res.send("Hello World");
})

app.post('/aluno', (req, res) => {
    console.log(req.body);
    res.send("OK!");
})

app.listen(3000, () => {
    console.log(`Api iniciada! Rodando em http://localhost:3000`);
});