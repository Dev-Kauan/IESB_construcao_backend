const express = require('express');
const router = express.Router();

// Controllers
const CargoController = require('../controllers/CargoController');
const FuncionarioController = require('../controllers/FuncionarioController');
const DepartamentoController = require('../controllers/DepartamentoController');

//Importando o validador
const { cargoValidador } = require('../validators/cargoValidator');
const { departamentoValidador } = require('../validators/departamentoValidator')
const { validarId } = require('../validators/idValidator');

//Cargos
router.post('/cargos', cargoValidador, CargoController.create);
router.get('/cargos', CargoController.getAll);
router.get('/cargos/:id', validarId, CargoController.getById);
router.put('/cargos/:id', validarId, cargoValidador, CargoController.update);
router.delete('/cargos/:id', validarId, CargoController.remove);

// rota de Funcionario
router.post('/funcionarios', FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll);
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.put('/funcionarios/:id', validarId, FuncionarioController.update)
router.delete('/funcionarios/:id', validarId, FuncionarioController.deletar)

//Departamento
// rota de Funcionario
router.post('/departamentos', departamentoValidador, DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll);
router.get('/departamentos/:id', validarId, DepartamentoController.getById)
router.put('/departamentos/:id', validarId, departamentoValidador, DepartamentoController.update)
router.delete('/departamentos/:id', validarId, DepartamentoController.remove)


module.exports = router;