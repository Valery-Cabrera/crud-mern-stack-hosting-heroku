import axios from "axios";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'

function UsuarioIndividual({usuario}){//Recibe parametro de la funcion principal del componente ListaUsuarios

    const navegar =useNavigate() //Agrego variable para que al eliminarlo vuelva automaticamente al inicio
    //Función para borrar usuario
    function borrarusuario(idusuario){
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario}).then(res => {
            console.log(res.data)
            Swal.fire('Felicidades', 'El usuario se borro con éxito')
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }



    return(
        
        <div className="container">
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">{usuario.nombre}</li>
                <li className="list-group-item">{usuario.email}</li>
                <li className="list-group-item">{usuario.numeroEstudiante}</li>
                <li className="list-group-item">{usuario.telefono}</li>
                <li className="list-group-item"><Link to={`/editarusuario/${usuario.idusuario}`}><h3 className="btn btn-success">Editar</h3></Link></li>
                <li className="list-group-item"><button className="btn btn-danger" onClick={() => {borrarusuario(usuario.idusuario)}}>Borrar</button></li>
            </ul>
        </div>
            
    )
}

export default UsuarioIndividual