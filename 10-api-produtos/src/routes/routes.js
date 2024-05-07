const express = require('express')
const router = express.Router()

const ProdutoController = require('../controllers/ProdutoController');


router.get('/', (req, res) => {
    res.json("FUNCIONOU!");
})

//Rotas de produto
//Buscar todos os produtos
router.get('/produtos', ProdutoController.getAll);

//Criar um produto
router.post('/produtos', ProdutoController.create);
module.exports = router