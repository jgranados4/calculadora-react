import React from 'react'
import './estilo/botonclear.css'

const Botonclear =(props)=>{
    return (
        <div className='Botonclear'onClick={props.manejarclear}>
            {props.children}
        </div>
    )

}
export default Botonclear;