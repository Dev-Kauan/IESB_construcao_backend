const yup = require('yup');

const projetoSchema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome obrigatório'),
    descricao: yup
        .string(),
    data_inicio: yup
        .date('Data inválida')
        .required('Campo data de inicio obrigatório'),
    data_fim: yup
        .date('Data inválida')
        .required('Campo data de fim obrigatório')
})

function projetoValidador(req, res, next) {
    projetoSchema
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
    projetoValidador
}