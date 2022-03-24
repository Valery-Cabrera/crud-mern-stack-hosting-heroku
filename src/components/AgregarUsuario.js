import axios from "axios";
import React, { useState } from "react";
import uniquid from 'uniqid'
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";

function AgregarUsuario(){

    //Hooks
    const[nombre,setNombre]=useState('')
    const[email,setEmail]=useState('')
    const[numeroEstudiante,setNumeroEstudiante]=useState('')
    const[telefono,setTelefono]=useState('')

    const navegar =useNavigate()

    function agregarUsuario(){
        var usuario={
            nombre: nombre,
            email: email,
            numeroEstudiante: numeroEstudiante,
            telefono: telefono,
            idusuario: uniquid()
        }
        console.log(usuario)

        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res => {
            Swal.fire('Felicidades', 'El usuario se creó con éxito')
            navegar('/')
        })
        //Validar si tenemos algun error
        .then(err =>{console.log(err)})

    }
    return(
        <div className="container">
            <br></br>
            <h2>Crear un nuevo estudiante</h2>
            <br></br>
            
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre}onChange={(e)=>{setNombre(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email}onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numeroEstudiante" className="form-label">Número estudiante</label>
                        <input type="text" className="form-control" value={numeroEstudiante}onChange={(e)=>{setNumeroEstudiante(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" value={telefono}onChange={(e)=>{setTelefono(e.target.value)}}></input>
                    </div>
                    <button onClick={agregarUsuario} className="btn btn-secondary">Guardar estudiante</button>
                </div>
            </div>
        </div>
        
    )
}

export default AgregarUsuario