const express = require('express');

const router = express.Router();

let listaCarros = [
    {
        id: 1,
        marca: "VW",
        modelo: "Gol",
        cor: "Vermelho",
        valor: 80000
    },
    {
        id: 2,
        marca: "Renault",
        modelo: "Kwid",
        cor: "Branco",
        valor: 72000.99
    }
];

//CREATE -> Cadastrar um carro
router.post('/bmw', (req, res) => {
    if (req.body.marca && req.body.modelo && req.body.cor && req.body.valor) {
        const carro = {
            id: Math.round(Math.random() * 1000),
            marca: req.body.marca,
            modelo: req.body.modelo,
            cor: req.body.cor,
            valor: req.body.valor
        }
        listaCarros.push(carro);
        return res.json(`Carro ${req.body.modelo} adicionado com sucesso!`);
    }
    return res.status(404).json('Todos os campos são obrigatórios!');
})

//READ -> Buscar todos os carros
router.get('/bmw', (req, res) => {
    if (listaCarros.length == 0) {
        return res.json('Não existe carro em nosso banco de dados!');
    }
    res.json(listaCarros);
});

//READ -> Buscar carros por id
router.get('/bmw/:id', (req, res) => {
    const index = listaCarros.findIndex(bmw => bmw.id == req.params.id)
    if (listaCarros[index]) {
        return res.json(listaCarros[index]);
    }
    return res.json("Não existe esse carro em nosso banco de dados!");
});

//UPDATE -> Alterar carro
router.put('/bmw/:id', (req, res) => {
    const index = listaCarros.findIndex(bmw => bmw.id == req.params.id);
    if (listaCarros[index]) {
        if (req.body.marca && req.body.modelo && req.body.cor && req.body.valor) {
            const carroAlterado = {
                id: Number(req.params.id),
                marca: req.body.marca,
                modelo: req.body.modelo,
                cor: req.body.cor,
                valor: req.body.valor
            }
            listaCarros[index] = carroAlterado;
            return res.status(200).json("Carro Alterado com sucesso!");
        }
        return res.status(404).json('Precisa preencher todos os campos!');
    }
    return res.status(404).json("Não existe esse carro em nosso banco de dados");
});

//DELETE
router.delete('/bmw/:id', (req, res) => {
    const index = listaCarros.findIndex(bmw => bmw.id == req.params.id);
    if (listaCarros[index]) {
        res.json(`O carro ${listaCarros[index].modelo} foi excluído com sucesso!`);
        listaCarros.splice(index, 1);
    } else {
        res.status(404).json('Não existe esse carro em nosso banco de dados!');
    }
});

//BUSCAR TODOS OS CARROS POR COR
router.get('/bmw/cor/:cor', (req, res) => {
    const cores = listaCarros.filter(carros => carros.cor.toUpperCase() == req.params.cor.toUpperCase());
    if (!cores.length == 0) {
        return res.json(cores);
    }
    return res.status(404).json("Não existe essa cor em nosso banco de dados!");
});

//BUSCAR TODOS OS CARROS POR COR E SOMAR TODOS OS VALORES DELES
router.get('/bmw/cor/:cor/valorTotal', (req, res) => {
    const cores = listaCarros.filter(carros => carros.cor.toUpperCase() == req.params.cor.toUpperCase());
    let valorTotal = 0;
    if (!cores.length == 0) {
        cores.forEach(carro => {
            valorTotal += carro.valor
        });
        return res.json(`O valor total da cor ${req.params.cor.toUpperCase()} é de: R$${valorTotal}`);
    }
    return res.json(`Não existe a cor ${req.params.cor.toUpperCase()} em nosso banco de dados!`);
});


module.exports = router;