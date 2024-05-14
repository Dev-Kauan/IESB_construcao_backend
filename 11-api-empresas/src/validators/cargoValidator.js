const yup = require('yup');

const cargoSchema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome obrigatório'),
    descricao: yup
        .string(),
    salario: yup
        .number('Campo salário precisa ser preenchido com números')
        .min(1412, 'Precisa ser maior que um salário minimo')
        .required('Campo salário obrigatório')
})

function cargoValidador(req, res, next) {
    cargoSchema
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
    cargoValidador
}