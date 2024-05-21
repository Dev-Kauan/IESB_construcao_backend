const yup = require('yup');
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET;

const usuarioSchema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome obrigatório'),
    email: yup
        .string()
        .email('E-mail inválido')
        .required('Campo e-mail obrigatório'),
    senha: yup
        .string('Campo senha precisa ser preenchido no formato')
        .required('Campo senha obrigatório')
})

function usuarioValidador(req, res, next) {
    usuarioSchema
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

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('E-mail inválido')
        .required('Campo e-mail obrigatório'),
    senha: yup
        .string('Campo senha precisa ser preenchido no formato')
        .required('Campo senha obrigatório')
})

function loginValidador(req, res, next) {
    loginSchema
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

async function checarToken(req, res, next) {

    try {
        const authorizationHeader = req.get('Authorization')
        const separator = authorizationHeader.split(' ')
        const token = separator[1]
        
        jwt.verify(token, JWT_SECRET)
        next()
    } catch (error) {
        return res.status(401).json({ mensagem: "Token inválido" })
    }
}

module.exports = {
    usuarioValidador,
    loginValidador,
    checarToken
}