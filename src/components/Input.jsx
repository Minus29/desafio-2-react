import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Input(props) {

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa un texto" onChange={props.nombre} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa una contraseña" onChange={props.contraseña} />
                </Form.Group>
                {props.boton}
            </Form>
        </div>
    );
}

export default Input;

