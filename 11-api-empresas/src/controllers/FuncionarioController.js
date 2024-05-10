const Funcionario = require('../models/Funcionario');

async function create(req, res) {
    try {
        const funcionario = new Funcionario(req.body)
        const funcionarioCriado = await funcionario.save()
        res.status(201).json(funcionarioCriado);
    } catch (error) {
        console.error("Erro ao criar funcionário: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar funcionário!",
            erro: error.messager
        })
    }
}

async function getById(req, res){
    const funcionario = await Funcionario.findById(req.params.id).populate('cargo')
    if(funcionario){
        res.json(funcionario);
    } else {
        res.status(404).json("Funcionário não encontrado!");
    }
}



module.exports = {
    create,
    getById
}