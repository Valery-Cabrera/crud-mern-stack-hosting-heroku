const express =require('express')
const router=express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    numeroEstudiante: Number,
    telefono: Number,
    idusuario: String //Campo unico
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)

//Exportar modelo para el router y que en el servidor se pueda usar
module.exports = router

//Agregar usuario. Aca se almacena
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        numeroEstudiante: req.body.numeroEstudiante,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Obtener todos los usuarios
router.get('/obtenerusuarios', (req,res)=>{
    ModeloUsuario.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Obtener Data de usuario
router.post('/obtenerdatausuario', (req,res)=>{
    ModeloUsuario.find({idusuario:req.body.idusuario},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Actualizar usuario. 
router.post('/actualizausuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario},{
        nombre: req.body.nombre,
        email: req.body.email,
        numeroEstudiante: req.body.numeroEstudiante,
        telefono: req.body.telefono
    }, (err) => {
        if(!err){
            res.send('Usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})


//Eliminar usuario
router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('Usuario borrado correctamente')
        }else{
            res.send(err)
        }
        
    })
})

