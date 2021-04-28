const express = require("express");

const routes = require('./routes/clienteRota');


const app = express();

app.use(express.json());
app.use('/clienteRota', routes);

app.listen(3333, () => {
    console.log("Server running");
});