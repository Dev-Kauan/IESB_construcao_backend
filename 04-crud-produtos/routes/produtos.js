const express = require('express')
const router = express.Router();

let listaProdutos = [
    {
        id: 1,
        nome: "Coca-cola",
        preco: 4.99
    },
    {
        id: 2,
        nome: "Batata frita",
        preco: 9.99
    },
    {
        id: 3,
        nome: "Arroz",
        preco: 29.99
    }
]

// CREATE
router.post('/produto', (req, res) => {
    const objeto = {
        "id": listaProdutos.length + 1,
        "nome": req.body.nome,
        "preco": Number(req.body.preco)
    };

    listaProdutos.push(objeto)
    res.json(`Item ${req.body.nome} adicionado com sucesso!!!`);
});

// READ -> BUSCAR TODOS OS PRODUTOS
router.get('/produto', (req, res) => {
    res.json(listaProdutos);
});

// READ -> BUSCAR PRODUTO POR ID
router.get('/produto/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id);
    if (listaProdutos[index]) {
        res.json(listaProdutos[index]);
    } else {
        res.json("Não existe esse produto em nosso banco");
    }

});

// UPADTE
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

// DELETE
router.delete('/produto/:id', (req, res) => {
    const index = listaProdutos.findIndex(produto => produto.id == req.params.id);
    if (listaProdutos[index]) {
        res.json(`Produto ${listaProdutos[index].nome} excluido com sucesso!`);
        listaProdutos.splice(index, 1);
    }else{
        res.send("Esse produto não existe em nossa base de dados");
    }

});

module.exports = router