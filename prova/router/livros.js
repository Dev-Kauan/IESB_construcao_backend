const express = require('express');
const router = express.Router();

listaDeLivros = [
    {
        id: 1,
        titulo: "Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        editora: "HarperCollins Brasil",
        ano: 1943,
        preco: 32.99
    },
    {
        id: 2,
        titulo: "O menino do pijama listrado",
        autor: "John Boyne",
        editora: "Grupo Companhia das Letras",
        ano: 2006,
        preco: 18.99

    }
];

//CREATE -> CRIAR UM LIVRO
router.post('/livros', (req, res) => {
    if (req.body.titulo && req.body.autor && req.body.editora && req.body.ano && req.body.preco) {
        const livro = {
            id: Math.round(Math.random() * 1000),
            titulo: req.body.titulo,
            autor: req.body.autor,
            editora: req.body.editora,
            preco: req.body.preco
        }
        listaDeLivros.push(livro);
        res.json(`O livro ${req.body.titulo} foi adicionado`);
    } else {
        res.status(400).json("É necessário que envie todos os campos!");
    }
});

//READ -> BUSCAR TODOS OS LIVROS
router.get('/livros', (req, res) => {
    res.json(listaDeLivros);
});

//READ -> BUSCAR LIVRO POR ID
router.get('/livros/:id', (req, res) => {
    const index = listaDeLivros.findIndex(livros => livros.id == req.params.id);
    if (listaDeLivros[index]) {
        res.json(listaDeLivros[index]);
    } else {
        res.status(404).json("Este livro não existe em nosso banco de dados!");
    }
});

//UPDATE -> ALTERAR UM LIVRO
router.put('/livros/:id', (req, res) => {
    const index = listaDeLivros.findIndex(livros => livros.id == req.params.id);
    if (listaDeLivros[index]) {
        if (req.body.titulo && req.body.autor && req.body.editora && req.body.ano && req.body.preco) {
            const livro = {
                id: Number(req.params.id),
                titulo: req.body.titulo,
                autor: req.body.autor,
                editora: req.body.editora,
                preco: req.body.preco
            }
            listaDeLivros[index] = livro;
            res.json("Livro alterado com sucesso!");
        } else {
            res.status(400).json("É necessário que envie todos os campos!");
        }
    } else {
        res.status(404).json("Este livro não existe em nosso banco de dados!");
    }
});

//DELETE - EXCLUIR UM LIVRO
router.delete('/livros/:id', (req, res) => {
    const index = listaDeLivros.findIndex(livros => livros.id == req.params.id);
    if (listaDeLivros[index]) {
        listaDeLivros.splice(index, 1);
        res.json("Livro excluído com sucesso!");
    } else {
        res.status(404).json("Este livro não existe em nosso banco de dados!");
    }
});

//ROTA PARA BUSCAR TODOS OS LIVROS DE UM DETERMINADO AUTOR
router.get('/livros/autor/:autor', (req, res) => {
    const autor = listaDeLivros.filter(livros => livros.autor.toUpperCase() == req.params.autor.toUpperCase());
    if (autor.length > 0) {
        res.json(autor);
    } else {
        return res.status(404).json("Não existe esse autor em nosso banco de dados!");
    }
});

//ROTA PARA CALCULAR E RETORNAR O PREÇO MÉDIO DE TODOS OS LIVROS DA LISTA
router.get('/livros/precoMedio', (req, res) => {
    let valorTotal = 0;
    listaDeLivros.forEach(livros => {
        valorTotal += livros.preco
    });
    const precoMedio = valorTotal / listaDeLivros.length;
    res.json(`O preço médio dos livros é: R$${precoMedio.toFixed(2)}`);
});
module.exports = router;