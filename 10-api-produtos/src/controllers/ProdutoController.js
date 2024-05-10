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
    const produtos = await Produto.findByIdAndUpdate(req.params.id,
        {
            nome: req.body.nome,
            preco: Number(req.body.preco),
            tipo: req.body.preco,
            tag: req.body.tag
        }
    );
}

module.exports = {
    getAll,
    create
}