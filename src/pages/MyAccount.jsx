import React from 'react';
import '../styles/MyAccount.scss';

const My_account = () => {
    return ( 
        <div className="login">
            <div className="form-container">
                <h1 className="title">Mi cuenta</h1>

                <form action="#" className="form">
                    <label for="name" className="label">Nombre</label>
                    <p className="value">Cristian</p>

                    <label for="email" className="label">Direccion de correo</label>
                    <p className="value">correo@edu.com.sv</p>

                    <label for="password" className="label">Contraseña</label>
                    <p className="value">********</p>

                    <input type="submit" value="Editar" className="secondary-button signup-button"/>
                </form>
            </div>
        </div>
     );
}
 
export default My_account;