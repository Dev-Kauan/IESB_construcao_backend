const Produto = require('../models/produtos');

async function getAll(req, res) {
    const produtos = await Produto.find();
    res.json(produtos);
}

async function create(req, res) {
    try {
        const produto = new Produto(req.body)
        const produtoCriado = await produto.save()
        res.status(201).json({
            mensagem: `Produto ${produtoCriado.nome} criado com sucesso!`,
            produtoCriado
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                mensagem: "Ocorreu um erro ao cadastrar produto",
                erro: error
            }
        )
    }
}

async function update(req, res) {
    const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (produtoAtualizado) {
        res.json(produtoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Produto não encontrado!" })
    }
}

async function getById(req, res) {
    const produto = await Produto.findById(req.params.id)
    if (produto) {
        res.json(produto)
    } else {
        res.status(404).json({ mensagem: "Produto não encontrado!" })
    }
}

async function remove(req, res) {
    const produtoExcluido = await Produto.findByIdAndDelete(req.params.id);
    if (produtoExcluido) {
        res.json({mensagem: "Excluído com sucesso!"})
    } else {
        res.status(404).json({ mensagem: "Produto não encontrado!" })
    }

}
module.exports = {
    getAll,
    create,
    update,
    getById,
    remove
}