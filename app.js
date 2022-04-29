const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send("Home");
})

app.listen(3000,()=>{
console.log("whats up listening");
});