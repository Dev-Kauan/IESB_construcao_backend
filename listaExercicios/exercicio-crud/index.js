const express = require('express');
const app = express();

const tarefa = require('./routes/tarefas');
// middleware
app.use(express.json());

//Exportando os router
app.use(tarefa);

app.listen(3000, () => {
    console.log("API iniciada com sucesso!");
});