const express = require('express');
const router = express.Router();

    router.get('/', (req,res) => {
        res.send("Bem vindo a rota principal, isso e sdo um teste")
    });

    router.get('/posts', (req,res) => {
        res.send("Pagina de posts aqui")
    });

module.exports = router;