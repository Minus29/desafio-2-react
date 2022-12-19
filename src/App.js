import React from 'react';
import Input from './components/Input.jsx';
import Boton from './components/Boton.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function App() {

  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');

  const BotonFormulario = () => {
    if (contraseña === '252525') {
      return (<Boton></Boton>)
     } else {
      return(<></>)
     }
  };

  return (
    <div>
      <h1>Desafío Estado de los componentes y eventos</h1>
      <Input nombre={(e) => setNombre(e.target.value)} contraseña={(e) => setContraseña(e.target.value)}></Input>
      <BotonFormulario></BotonFormulario>
    </div>
  );
}

export default App;
