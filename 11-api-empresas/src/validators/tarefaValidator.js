const yup = require('yup');

const tarefaSchema = yup.object().shape({
    titulo: yup
        .string('Campo titulo precisa ser um texto')
        .required('Campo titulo obrigatório'),
    descricao: yup
        .string(),
    data_inicio: yup
        .date('Data inválida')
        .required('Campo data de inicio obrigatório'),
    data_fim: yup
        .date('Data inválida')
        .required('Campo data de fim obrigatório'),
    responsavel: yup
        .string('Campo responsável precisa ser um texto'),
    projeto: yup
        .string('Campo responsável precisa ser um texto'),
})

function tarefaValidador(req, res, next) {
    tarefaSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(e => {
            const errors = e.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}

module.exports = {
    tarefaValidador
}