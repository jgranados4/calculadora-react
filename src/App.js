import React, { useState } from "react";
import "./estilo/app.css";
import Boton from "./boton";
import Pantalla from "./pantall";
import Botonclear from "./botonclear";
import {evaluate} from 'mathjs';

const App = (props) => {
  const [input, setInput] = useState("");
  const AgregarInput = (val) => {
    setInput(input + val);
  };
  const result=()=>{
    if(input){
      setInput(evaluate(input))
    }else{
      alert("Ingrese los digitos ")

    }
  };
  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={AgregarInput}>1</Boton>
          <Boton manejarClic={AgregarInput}>2</Boton>
          <Boton manejarClic={AgregarInput}>3</Boton>
          <Boton manejarClic={AgregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={AgregarInput}>4</Boton>
          <Boton manejarClic={AgregarInput}>5</Boton>
          <Boton manejarClic={AgregarInput}>6</Boton>
          <Boton manejarClic={AgregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={AgregarInput}>7</Boton>
          <Boton manejarClic={AgregarInput}>8</Boton>
          <Boton manejarClic={AgregarInput}>9</Boton>
          <Boton manejarClic={AgregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={result}>=</Boton>
          <Boton manejarClic={AgregarInput}>0</Boton>
          <Boton manejarClic={AgregarInput}>.</Boton>
          <Boton manejarClic={AgregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Botonclear manejarclear={()=>setInput('')}>clear</Botonclear>
        </div>
      </div>
    </div>
  );
};
export default App;
