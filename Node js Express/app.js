const express = require('express');
const app = express();
const port = 3000

app.get('/Home',(req,res)=> {
res.send('Contact');   
});


app.get('/contactenos',(req,res) => {
 res.send('products');   
});


app.get('/products',(req,res) => {
res.send('productos');    
});


app.get('/abc123', (req,res) => {
res.send('producto abc123');
});

app.listen(port, () => {
    console.log('Server listeninig on http://localhost:${port}');
});