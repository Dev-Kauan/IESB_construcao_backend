const express = require('express');
const router = express.Router();

// Controllers
const CargoController = require('../controllers/CargoController');
const FuncionarioController = require('../controllers/FuncionarioController');
const DepartamentoController = require('../controllers/DepartamentoController');
const TarefaController = require('../controllers/TarefaController');
//Importando o validador
const { cargoValidador } = require('../validators/cargoValidator');
const { departamentoValidador } = require('../validators/departamentoValidator');
const { funcionarioValidador } = require('../validators/funcionarioValidator');
const { tarefaValidador } = require('../validators/tarefaValidator')
const { validarId } = require('../validators/idValidator');

//Cargos
router.post('/cargos', cargoValidador, CargoController.create);
router.get('/cargos', CargoController.getAll);
router.get('/cargos/:id', validarId, CargoController.getById);
router.put('/cargos/:id', validarId, cargoValidador, CargoController.update);
router.delete('/cargos/:id', validarId, CargoController.remove);

// rota de Funcionario
router.post('/funcionarios', funcionarioValidador, FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll);
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.put('/funcionarios/:id', validarId, funcionarioValidador, FuncionarioController.update)
router.delete('/funcionarios/:id', validarId, FuncionarioController.deletar)

//Departamento
// rota de departamento
router.post('/departamentos', departamentoValidador, DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll);
router.get('/departamentos/:id', validarId, DepartamentoController.getById)
router.put('/departamentos/:id', validarId, departamentoValidador, DepartamentoController.update)
router.delete('/departamentos/:id', validarId, DepartamentoController.remove)

//Tarefa
//rota de tarefa
router.post('/tarefas', tarefaValidador, TarefaController.create)
router.get('/tarefas', TarefaController.getAll);
router.get('/tarefas/:id', validarId, TarefaController.getById)
router.put('/tarefas/:id', validarId, tarefaValidador, TarefaController.update)
router.delete('/tarefas/:id', validarId, TarefaController.remove)

module.exports = router;