// importar express
const express = require('express');
// criar um router
const router = express.Router()

// dados mockados
// criar uma lista
let listaContatos = [];

//CRUD
// CREATE -> CADASTRAR UM CONTATO
router.post('/contatos', (req, res) => {
    listaContatos.push(req.body.nome);
    res.status(201).json({ mensagem: "Contato criado com sucesso!" });
});

// READ -> BUSCAR TODOS OS CONTATOS
router.get('/contatos', (req, res) => {
    res.json(listaContatos);
});

// READ -> BUSCA DO CONTATO PELO IDENTIFICADOR
router.get('/contatos/:id', (req, res) => {
    const id = req.params.id;
    res.json(listaContatos[id]);
});

// UPDATE -> ATUALIZAR CONTATO
router.put('/contatos/:id', (req, res) => {
    const posicao = Number(req.params.id);
    res.send(`${listaContatos[posicao]}, foi atualizado para ${req.body.nome}`);
    listaContatos[posicao] = req.body.nome;
})

// DELETE -> EXCLUIR CONTATO
router.delete('/contatos/:id', (req, res) => {
    const posicao = Number(req.params.id);
    res.send(`Contato ${listaContatos[posicao]} excluido com sucesso!`);
    listaContatos.splice(posicao, 1);
})

// exportar o router
module.exports = router