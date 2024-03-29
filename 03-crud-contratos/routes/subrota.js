// importa o modulo do express
const express = require('express');
// criando um router
const router = express.Router();

// crio as rotas e as lógicas
router.get("/subrota", (req, res) => {
    res.send("SubRota GET");
});

router.post("/subrota", (req, res) => {
    res.send("SubRota POST");
});

router.put("/subrota", (req, res) => {
    res.send("SubRota PUT");
});

router.delete("/subrota", (req, res) => {
    res.send("SubRota DELETE");
})

// exporto o router
module.exports = router;

// este router também é um middleware