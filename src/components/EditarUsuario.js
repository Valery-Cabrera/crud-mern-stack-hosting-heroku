import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function EditarUsuario(){
    
    const params = useParams()

     //Hooks
     
     const[nombre,setNombre]=useState('')
     const[email,setEmail]=useState('')
     const[numeroEstudiante,setNumeroEstudiante]=useState('')
     const[telefono,setTelefono]=useState('')
     

     useEffect(() => {
         axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario}).then(res => {
             console.log(res.data[0])
             const datausuario = res.data[0]
             setNombre(datausuario.nombre)
             setEmail(datausuario.email)
             setNumeroEstudiante(datausuario.numeroEstudiante)
             setTelefono(datausuario.telefono)
         })
     },[])


     const navegar=useNavigate()

     //Funcion que actualiza
     function editarUsuario(){
         
         //Crear nuevo objeto para actualiar el usuario
         const actualizarusuario = {
            nombre: nombre,
            email: email,
            numeroEstudiante: numeroEstudiante,
            telefono: telefono,
            idusuario: params.idusuario
         }
        //Hacer la petición usando axios
         axios.post('/api/usuario/actualizausuario', actualizarusuario)
        .then(res => {
            console.log(res.data)
            Swal.fire('Felicidades', 'El usuario se actualizo con éxito')
            navegar('/')
        })
        //Validar si tenemos algun error
        .then(err =>{console.log(err)})
     }

    
     
    
    return(
        <div className="container">
            
            <br></br>
            <h2>Editar Usuario</h2>
            <br></br>
            
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numeroEstudiante" className="form-label">Número estudiante</label>
                        <input type="text" className="form-control" value={numeroEstudiante} onChange={(e)=>{setNumeroEstudiante(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>
                    </div>
                    <button onClick={editarUsuario} className="btn btn-secondary">Editar estudiante</button>
                </div>
            </div>
        </div>
        
    )
}

export default EditarUsuario