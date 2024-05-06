const express = require('express');

// Configurando meu router
const router = express.Router();

let listaPessoas = [
    {
        id: 1,
        nome: 'João',
        idade: 20,
        email: "joao@gmail.com",
        telefone: "(61) 98765-4321"
    },
    {
        id: 2,
        nome: 'Kauan',
        idade: 19,
        email: "kauan@gmail.com",
        telefone: "(61) 12345-6789"
    },
];

//middleware validando se uma pessoa existe
function validarPessoa(req, res, next) {
    const pessoa = listaPessoas.find(p => p.id == req.params.id);
    if(pessoa){
        req.pessoa = pessoa;
        next();
    } else {
        return res.status(404).json("Essa pessoa não foi encontrada!");
    }
}

//middleware validando se estar vindo atributos do corpo
function validarAtributos(req, res, next) {
    if(!req.body.nome && !req.body.idade && !req.body.email && !req.body.telefone){
        return res.status(400).json("Você não ofereceu dados suficientes!");
    }
}

// Operação para criar uma pessoa
router.post('/pessoas', validarAtributos, (req, res) => {
    const objPessoa = {
        id: Math.round(Math.random() * 1000),
        nome: req.body.nome,
        idade: Number(req.body.idade),
        email: req.body.email,
        telefone: req.body.telefone 
    };
    listaPessoas.push(objPessoa);
    res.json(`A pessoa ${req.body.nome} foi adicionado com sucesso!`);
})

// Operação para buscar todas as pessoas
router.get('/pessoas', (req, res) => {
    res.status(200).json(listaPessoas);
});

// Operação para buscar pessoa por id
router.get('/pessoas/:id', validarPessoa, (req, res) => {
    res.json(req.pessoa);
})

// Operação para alterar pessoa
router.put('/pessoas/:id', validarPessoa, validarAtributos, (req, res) => {
    const index = listaPessoas.findIndex(p => p.id == req.params.id);
    const objAlterado = {
        id: req.params.id,
        nome: req.body.nome,
        idade: Number(req.body.idade),
        email: req.body.email,
        telefone: req.body.telefone
    };

    listaPessoas[index] = objAlterado;
    res.json("Pessoa alterada com sucesso!");
});


// Operação para deletar pessoa
router.delete('/pessoas/:id', validarPessoa, (req, res) => {
    const index = listaPessoas.findIndex(p => p.id == req.params.id);
    listaPessoas.splice(index, 1);
    res.json("Pessoa excluída com sucesso!");
});
module.exports = router;