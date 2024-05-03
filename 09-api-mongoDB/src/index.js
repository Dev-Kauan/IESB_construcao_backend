require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();

app.use(express.json());

//Conexão com o banco
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@databaseapi.ux8vp7e.mongodb.net/?retryWrites=true&w=majority&appName=databaseAPI`)
    .then(() => console.log("Conectado ao meu banco de dados!"))
    .catch(err => console.log("Erro ao conectar!"))

// DB Modelos
const Tarefa = mongoose.model('tarefa', { nome: String })

// Rotas
app.get('/', (req, res) => {
    res.json("Hello");
});

// buscar todas as tarefas
app.get('/tarefas', async (req, res) => {
    const tarefas = await Tarefa.find();
    res.json(tarefas);
})

// buscar tarefa por id
app.get('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findById(req.params.id);
    res.json(tarefa);
})

// Criar uma tarefa
app.post('/tarefas', async (req, res) => {
    const tarefa = new Tarefa({nome: req.body.nome})
    await tarefa.save();
    res.json(tarefa);
})

// Alterar uma tarefa
app.put('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, {nome: req.body.nome}, {new: true});
    res.json(tarefa);
})

// Deletar uma tarefa
app.delete('/tarefas/:id', async (req, res) => {
    res.json(`item deletado com sucesso!`)
    await Tarefa.findByIdAndDelete(req.params.id, {new:true});
})

app.listen(3000, () => {
    console.log("Aplicação rodando!");
});