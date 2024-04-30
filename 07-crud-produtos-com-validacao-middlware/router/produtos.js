const express = require('express');

const router = express.Router();

let listaProdutos = [
    {
        id: 1,
        nome: "Arroz",
        preco: 29.99
    }
];

// middlware de validação
// validar se o produto existe
function validarProduto(req, res, next) {
    const id = req.params.id;
    const produto = listaProdutos.find(produto => produto.id == id)
    if (produto) {
        req.produto = produto
        next();
    } else {
        return res.status(404).json("Produto não encontrado!");
    }
}

// validar os atributos do corpo
function validarAtributos(req, res, next) {
    const dadosRecebidos = req.body
    if (!dadosRecebidos.nome || !dadosRecebidos.preco) {
        return res.status(400).json("Você não forneceu dados suficientes para o cadastro!");
    } else {
        next()
    }
}

// CREATE -> Cadastro de produtos
router.post('/produtos', validarAtributos, (req, res) => {
    const dados = req.body

    const obj = {
        id: Math.round(Math.random() * 1000),
        nome: req.body.nome,
        preco: req.body.preco
    }
    listaProdutos.push(obj);
    return res.status(201).json(`Produto ${req.body.nome} adicionado com sucesso!`);
});

// READ -> Buscar todos os produtos
router.get('/produtos', (req, res) => {
    res.status(200).json(listaProdutos);
});

// READ -> Buscar produto por id
router.get('/produtos/:id', validarProduto, (req, res) => {
    res.json(req.produto);
});

// UPDATE -> Alterar um produto
router.put('/produtos/:id', validarAtributos, validarProduto, (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaProdutos.findIndex(produto => produto.id == id)
    
    const produto = {
        id: Number(id),
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
});

// DELETE -> excluir produto
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const index = listaProdutos.findIndex(produto => produto.id == id);

    if (index == -1) {
        res.status(404).json({ mensagem: "Produto não encontrado!" });
    } else {
        listaProdutos.splice(index, 1);
        res.status(200).json({ mensagem: "Produto excluído com sucesso!" });
    }
})

module.exports = router