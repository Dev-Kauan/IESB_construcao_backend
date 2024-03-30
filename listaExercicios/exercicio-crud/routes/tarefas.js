const express = require('express');

const router = express.Router();

let listaTarefas = ['Estudar Java', 'Estudar Angular', 'Estudar SCRUM'];

//CRUD
//CREATE
router.post('/tarefas', (req, res) => {
    const tarefa = req.body.tarefa;
    listaTarefas.push(tarefa);
    res.send(`Tarefa ${tarefa} cadastrada com sucesso!`);
});

//READ -> BUSCAR TODAS AS TAREFAS
router.get('/tarefas', (req, res) => {
    res.send(listaTarefas);
})

//READ -> BUSCAR TAREFA POR ID
router.get('/tarefas/:id', (req, res) => {
    const id = req.params.id;
    if(listaTarefas[id]){
        res.send(listaTarefas[id]);
    }
    res.send("Não existe essa tarefa em nosso banco de dados!");
    
})

//UPDATE
router.put('/tarefas/:id', (req, res) => {
    const id = req.params.id;
    const alteracao = req.body.alteracao;
    res.send(`A tarefa ${listaTarefas[id]}, foi trocada por ${alteracao}`);
    listaTarefas[id] = alteracao;
})

router.delete('/tarefas/:id', (req, res) => {
    const id = req.params.id;
    
    if(listaTarefas[id]){
        res.send(`A tarefa ${listaTarefas[id]} foi excluida com sucesso!`);
        listaTarefas.splice(id, 1);
    }
    res.send("Não existe essa tarefa em nosso banco de dados!");
    
})

module.exports = router;
