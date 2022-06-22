
import express from 'express';
const express =require('express');

const app = express()
const port = 5000;

app.get('/', (req, res) =>{
    console.log("metodo")
    res.send('<h1>Programación Web</h1>');
})
const getTaskList = _ =>{
    const task1=
}
app.get('/saludo/:nombre', (req, res) =>{
    console.log(req.params.nombre)
    res.send(`Hola ${req.params.nombre}`);
})
app.listen(port, function () {
    console.log(`Servidor funcionando en el puerto ${port}`)
})