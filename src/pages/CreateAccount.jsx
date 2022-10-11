import React from 'react';
import '../styles/CreateAccount.scss';

const Create_account = () => {
    return ( 
        <div className="login">
        <div className="form-container">
            <h1 className="title">Mi cuenta</h1>
            <form action="#" className="form">
                <label for="name" className="label">Nombre</label>
                <input type="text" id="name" className="input input-name"/>
                <label for="email" className="label">Direccion de correo</label>
                <input type="email" id="email" className="input input-email"/>
                <label for="password" className="label">Contraseña</label>
                <input type="password" id="password" className="input input-password" value="********"/>
                <input type="submit" value="Crear cuenta" className="primary-button signup-button"/>
            </form>
        </div>
    </div>
     );
}
 
export default Create_account;