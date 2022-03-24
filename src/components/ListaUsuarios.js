import axios from "axios";
import React, { useEffect, useState } from "react";
import UsuarioIndividual from "./UsuarioIndividual";
function ListaUsuarios(){

     //Hooks
     const[datausuarios, setdatausuario] = useState([])

     useEffect(()=>{
         axios.get('api/usuario/obtenerusuarios').then(res=>{
             console.log(res.data)//me mustra solo la data no el estado, ni nada más
             setdatausuario(res.data)//mustra los datos en la aplicación
             
         }).catch(err=>{ //Revisar errores
             console.log(err)
         })
     },[])

     //Mapear lista de usuarios en objeto usuario cada usuario es un item
     const listausuarios = datausuarios.map(usuario => {
         return(
             <div key={usuario.idusuario}>
                 <UsuarioIndividual usuario={usuario}/>
             </div>
         )
     })

    return(
        <div>
            <br></br>
            <h2>Lista de estudiantes</h2>
            <br></br>
            {listausuarios}
        </div>
    )
}

export default ListaUsuarios