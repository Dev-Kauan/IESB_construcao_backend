const express = require('express');
const app = express();

app.use(express.json());

const carrosRouter = require('./router/carros');
app.use(carrosRouter);

app.listen(3000, () => {
    console.log("API iniciada!");
})