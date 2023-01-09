// Carregando módulos
    const express = require('express');
    const exp = require('express-handlebars');
    const app = express();
    // const mongoose = require('mongoose');
// Configurações
    // Body Parser
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    
// Rotas

// Outros
const PORT = 8081;
app.listen(PORT, () => {
    console.log('Servidor rodando!')
});