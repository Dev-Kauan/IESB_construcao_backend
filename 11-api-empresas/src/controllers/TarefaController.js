const Tarefa = require('../models/Tarefa');

// methods
async function create(req, res) {
    const tarefa = new Tarefa(req.body)
    const tarefaCriada = await tarefa.save()
    res.status(201).json(tarefaCriada);
}

async function getAll(req, res) {
    res.json(await Tarefa.find())
}

async function getById(req, res) {
    const tarefa = await Tarefa.findById(req.params.id)
    if (tarefa) {
        res.json(tarefa)
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrado!" })
    }
}

async function update(req, res) {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (tarefaAtualizada) {
        res.json(tarefaAtualizada)
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrado!" })
    }

}

async function remove(req, res) {
    const tarefaExcluida = await Tarefa.findByIdAndDelete(req.params.id);
    if (tarefaExcluida) {
        res.json({mensagem: "Excluído com sucesso!"})
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrado!" })
    }

}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}