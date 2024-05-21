const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: false 
        },
        data_inicio: {
            type: Date,
            required: true
        },
        data_fim: {
            type: Date,
            required: true
        },
        responsavel: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'funcionario',
            required: false
        },
        projeto: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'projeto',
            required: false
        },
    },
    {
        timestamps: true
    }
)

const Tarefa = mongoose.model('tarefa', schema)

module.exports = Tarefa

