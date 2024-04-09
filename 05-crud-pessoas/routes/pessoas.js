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

//CREATE
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

//READ
router.get('/pessoa', (req, res) => {
    res.send(listaPessoas);
});

//READ POR ID
router.get('/pessoa/:id', (req, res) => {
    const index = listaProdutos.findIndex(pessoa => pessoa.id == req.body.id);
    if (listaPessoas[index]) {
        res.json(listaPessoas[index]);
    } else {
        res.json("Não existe essa pessoa em nosso banco");
    }
})

router.put('/produto/:id', (req, res) => {
    const index = listaProdutos.findIndex(produto => produto.id == req.params.id);
    if (req.body.nome || req.body.preco) {
        if (req.body.nome) {
            listaProdutos[index].nome = req.body.nome;
        }
        if (req.body.preco) {
            listaProdutos[index].preco = req.body.preco;
        }
    } else {
        res.json("Esse paramêtro que você enviou não existe!");
    }
    res.json(`Alteração feita com sucesso!!`);
});

router.delete('/pessoa/:id', (req, res) => {

});

module.exports = router