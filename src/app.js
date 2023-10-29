const express = require('express');
const app = express();

const port = process.env.PORT || 3001

app.use(express.static('public'));


app.listen(port, ()=> console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/sign-up', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/sign-in', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/cart', (req,res)=>{
    res.sendFile(__dirname + '/views/cart.html');
});
