const express = require('express');

const router = express.Router();
const listaCarros = [
    {
        id: 1,
        marca: "Fiat",
        modelo: "UNO",
        cor: "Vermelho",
        valor: 10000
    }
]

//CREATE
router.post('/carros', (req, res) => {
    if (req.body.marca && req.body.modelo && req.body.cor && req.body.valor) {
        const carro = {
            id: Math.round(Math.random() * 1000),
            marca: req.body.marca,
            modelo: req.body.modelo,
            cor: req.body.cor,
            valor: req.body.valor
        }
        listaCarros.push(carro);
        return res.status(200).json(`Carro ${req.body.modelo} adicionado com sucesso!`);
    }

    return res.status(404).json("Não a dados suficientes sobre o carro ")
})


//buscar todos os carros 
router.get('/carros', (req, res) => {
    res.send(listaCarros)
})

//buscar carro por id
router.get('/carros/:id', (req,res)=>{
    const id = req.params.id
    const index = listaCarros.findIndex(carros => carros.id ==id)
    if(listaCarros[index])
    {
        return res.status(200).json(listaCarros[index])
    }
    return res.status(404).json("Não existe este carro em nosso banco de dados!")
})

//UPDATE
router.put('/carros/:id', (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(carros => carros.id == id)
    if(listaCarros[index]){
        if (req.body.marca && req.body.modelo && req.body.cor && req.body.valor){
            const carro = {
                id : id,
                marca: req.body.marca,
                modelo: req.body.modelo,
                cor: req.body.cor,
                valor: req.body.valor
            }
            listaCarros[index] = carro
            return res.status(200).json("Carro alterado com sucesso!");
    
        }
        res.status(404).json('Não veio dados suficiente para alteração!')
    }else{
        res.status(404).json("Não existe esse carro em nosso banco de dados");
    }
    
})


//DELETE
router.delete('/carros/:id', (req, res) => {
    const index = listaCarros.findIndex(carros => carros.id == req.body.id);
    if(listaCarros[index]){
        listaCarros.splice(index, 1);
        res.status(200).json(`Carro excluido com sucesso!`);
        
    }

    return res.status.json("Carro não encontrado!");
});

//Metodos adicionais
router.get('/carro/:cor', (req, res) => {
    const index = listaCarros.find(carros => carros.cor == req.body.cor);
    const cores = listaCarros.filter(index);
    res.json(cores)
})


module.exports = router;
