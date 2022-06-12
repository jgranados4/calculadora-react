import React from 'react'
import './estilo/boton.css'
//function boton
const boton =(props)=>{
    const esOperador =valor=>{
        return isNaN(valor)&&(valor != '.')&&(valor != '=');
    };
    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador':''}`.trimEnd()}
        onClick={()=>props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}
export default boton;