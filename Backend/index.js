const express = require('express')
const app=express()

//Importar conexion MongoDB
const archivoBD=require('./conexion')

//Importación del archivo de rutas y modelo de usuario
const rutausuario=require('./rutas/usuario')

//Importar body parser Obtener de los campos del formulario la información
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario',rutausuario)

//Funcionamiento backend ver en el navegador
app.get('/', (req,res)=> {
    res.end('Bienvenidos al servidor Backend Node.js Corriendo...')
})


//Configurar server básico
app.listen(5000,function(){
    console.log('El servidor NODE esta corriendo correctamente')
})