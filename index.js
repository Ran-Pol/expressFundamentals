const express = require("express");

const app = express();

app.get('/products', (req,res)=>{
    // With plain JavaScript we can:
    // Validate data
    // Query a database
    // Process data
    res.send('List of products')
})

app.post('/products', (req,res)=>{
    res.send('Creando Productos')
})

app.put('/products', (req,res)=>{
    res.send('Updating products')
})

app.delete('/products', (req,res)=>{
    res.send('Delete product')
})
app.patch('/products', (req,res)=>{
    res.send('Updating a part of the product')
})

app.listen(3000);
console.log(`Server on port ${3000}`);
