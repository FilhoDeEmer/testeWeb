const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view wngine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que envia o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
