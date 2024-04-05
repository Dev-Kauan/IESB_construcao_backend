const express = require('express');
const router = express.Router();

let listaPessoas = [
    {
        id: 1,
        nome: "João",
        idade: 20,
        email: "joão@email.com",
        telefone: "61900010002"
    },
    {
        id: 2,
        nome: "Souza",
        idade: 19,
        email: "souza@email.com",
        telefone: "61955010002"
    },
    {
        id: 3,
        nome: "Lima",
        idade: 25,
        email: "lima@email.com",
        telefone: "61955013302"
    }
];

router.post('/pessoa', (req, res) => {
    const objetoPessoa = {
        id: listaPessoas.length + 1,
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email,
        telefone: req.body.telefone
    }
    listaPessoas.push(objetoPessoa);
    res.send(`O usuário ${req.body.nome} adicionado com sucesso!`);
});

router.put('/pessoa/:id', (req, res) => {
    const index = listaProdutos.findIndex(pessoa => pessoa.id == req.body.id);
});

router.delete('/pessoa/:id', (req, res) => {
    
});

router.get('/pessoa', (req, res) => {
    res.send(listaPessoas);
});

module.exports = router