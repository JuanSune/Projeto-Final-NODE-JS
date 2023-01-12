// Carregando módulos
    const express = require('express');
    const exp = require('express-handlebars');
    const app = express();
    // const mongoose = require('mongoose');
     const rotas = require('./rotas/admin');

// Configurações
    // Body Parser
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    // Handlebars
    app.engine('handlebars', exp.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Mongoose
        // Em breve
    
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