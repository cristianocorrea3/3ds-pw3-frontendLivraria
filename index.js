const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//MAPEAMENTO DA PASTA PUBLIC
app.use(express.static('public'));

//CONFIGURA O EJS COMO VIEW ENGINE (REDENRIZA AS PÁGINAS DE FRONT-END)
app.set('view engine', 'ejs');

//ROTA DE TESTE DE RENDERIZAÇÃO
app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(3001, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3001');
});