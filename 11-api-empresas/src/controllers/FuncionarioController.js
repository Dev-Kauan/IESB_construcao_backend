const Funcionario = require('../models/Funcionario');

async function create(req, res) {
    const funcionario = new Funcionario(req.body)
    const funcionarioCriado = await funcionario.save()
    res.status(201).json(funcionarioCriado);
}

async function getAll(req, res) {
    res.json(await Funcionario.find().populate(['cargo_id', 'departamento_id']));
}

async function getById(req, res) {
    const funcionario = await Funcionario.findById(req.params.id).populate(['cargo_id', 'departamento_id'])
    if (funcionario) {
        res.json(funcionario);
    } else {
        res.status(404).json("Funcionário não encontrado!");
    }
}

async function update(req, res) {
    const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (funcionarioAtualizado) {
        res.json(funcionarioAtualizado)
    } else {
        res.status(404).json({ mensagem: "Funcionário não encontrado!" })
    }
}

async function deletar(req, res) {
    const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id);
    if (funcionarioExcluido) {
        res.json({ mensagem: "Excluído com sucesso!" })
    } else {
        res.status(404).json({ mensagem: "Funcionário não encontrado!" })
    }
}

module.exports = {
    create,
    getById,
    getAll,
    update,
    deletar
}