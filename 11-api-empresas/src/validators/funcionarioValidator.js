const yup = require('yup');

const funcionarioSchema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome obrigatório'),

    cpf: yup
        .string('Campo CPF precisa ser um texto')
        .required('Campo CPF obrigatório'),

    email: yup
        .string('Campo email precisa ser um texto')
        .email('E-mail inválido!')
        .required('Campo email inválido'),

    telefone: yup
        .string('Campo telefone precisar ser um texto')
        .required('Campo telefone obrigatório'),

    dataContratacao: yup
        .date('Data inválida')
        .required('Campo data contratação obrigatório'),

    dataNascimento: yup
        .date('Data inválida')
        .required('Campo data de nascimento obrigatório'),

    genero: yup
        .string('Campo gênero precisa ser um texto')
        .required('Campo gênero obrigatório'),

    cargo: yup
        .string('Campo cargo precisa ser um texto'),
        
    departamento: yup
        .string('Campo departamento precisa ser um texto')
})

function funcionarioValidador(req, res, next) {
    funcionarioSchema
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
    funcionarioValidador
}