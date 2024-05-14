const express = require('express');
const router = express.Router();

// Controllers
const CargoController = require('../controllers/CargoController');
const FuncionarioController = require('../controllers/FuncionarioController');

//Importando o validador
const {cargoValidador} = require('../validators/cargoValidator');
const {validarId} = require('../validators/idValidator');

//Cargos
router.post('/cargos', cargoValidador, CargoController.create);
router.get('/cargos', CargoController.getAll);
router.get('/cargos/:id', validarId, CargoController.getById);
router.put('/cargos/:id', validarId, cargoValidador, CargoController.update);
router.delete('/cargos/:id', validarId, CargoController.remove);

// rota de Funcionario
router.post('/funcionarios', FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll);
router.get('/funcionarios/:id', FuncionarioController.getById)

module.exports = router;