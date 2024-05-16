const express = require('express')
const router = express.Router()

const ProdutoController = require('../controllers/ProdutoController');


router.get('/', (req, res) => {
    res.json("FUNCIONOU!");
})

//Rotas de produto
//Buscar todos os produtos
router.get('/produtos', ProdutoController.getAll);
router.get('/produtos/:id', ProdutoController.getById);

//Criar um produto
router.post('/produtos', ProdutoController.create);
router.put('/produtos/:id', ProdutoController.update);
router.post('/produtos/:id', ProdutoController.remove);


module.exports = router