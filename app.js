// Carregando módulos
    const express = require('express');
    const exp = require('express-handlebars');
    const app = express();
    // const mongoose = require('mongoose');
     const rotas = require('./rotas/admin');

    const path = require('path');

// Configurações
    // Body Parser
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    // Handlebars
    app.engine('handlebars', exp.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Mongoose
        // Em breve
    
        // Public
        app.use(express.static(path.join(__dirname + "/public")))

// Rotas
    app.get('/', (req,res) => {
        res.send('Esse e o site, essa e a rota principal');
    });

    app.use("/rotas",rotas);
    
// Outros
const PORT = 8081;
app.listen(PORT, () => {
    console.log('Servidor rodando!')
});