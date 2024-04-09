const express = require('express');

const router = express.Router();

let listaProdutos = [
    {
        id: 1,
        nome: "Arroz",
        preco: 29.99
    }
];

// CREATE -> Cadastro de produtos
router.post('/produtos', (req, res) => {
    if (req.body.nome && req.body.preco) {
        const obj = {
            id: Math.round(Math.random() * 1000),
            nome: req.body.nome,
            preco: req.body.preco
        }
        listaProdutos.push(obj);
        return res.status(201).json(`Produto ${req.body.nome} adicionado com sucesso!`);
    }
    return res.status(400).json(
        "Você não forneceu dados suficientes para o cadastro!");
});

// READ -> Buscar todos os produtos
router.get('/produtos', (req, res) => {
    res.status(200).json(listaProdutos);
});

// READ -> Buscar produto por id
router.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const produto = listaProdutos.find(produto => produto.id == id);
    if (produto) {
        return res.status(200).json(produto)
    }
    return res.status(404).json("Produto não encontrado!");
});

// UPDATE -> Alterar um produto
router.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const novosDados = req.body;

    if (!novosDados.nome || !novosDados.preco) {
        res.status(400).json({ mensagem: "Nome e preço são obrigatórios" })
    } else {
        const index = listaProdutos.findIndex(produto => produto.id == id);
        if (index === -1) {
            res.status(404).json({ mensagem: "Produto não encontrado!" })
        } else {
            const produto = {
                id: id,
                nome: novosDados.nome,
                preco: novosDados.preco
            }

            listaProdutos[index] = produto
            res.status(200).json(
                {
                    mensagem: "Produto alterado com sucesso!",
                    produto
                }
            )
        }
    }
});

// DELETE -> excluir produto
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const index = listaProdutos.findIndex(produto => produto.id == id);

    if(index == -1){
        res.status(404).json({mensagem: "Produto não encontrado!"});
    }else {
        listaProdutos.splice(index, 1);
        res.status(200).json({mensagem: "Produto excluído com sucesso!"});
    }
})

module.exports = router