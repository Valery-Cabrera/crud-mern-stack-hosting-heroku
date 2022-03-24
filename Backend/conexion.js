const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:1234@cluster0.zfflc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const objectobd=mongoose.connection

objectobd.on('connected',()=>{console.log('Conexion correcta a MongoDB')})
objectobd.on('error',()=>{console.log('Error en la conexion a MongoDB')})

module.exports=mongoose