import React from 'react';
import '../styles/new_password.scss';

const New_password = () => {
    return ( 
        <div className="login">
            <div className="form-container">
                <img src="../image/logo_lalishop.png" alt="logo" className="logo"/>
                <h1 className="title">Crear una nueva contraseña</h1>
                <p className="subtitle">Ingrese una nueva contraseña para su cuenta</p>
                <form action="/" className="form-login">
                    <label for="password" className="label">Ingrese contraseña</label>
                    <input type="password" id="password" placeholder="********" className="input input-password"/>
                    <label for="new-password" className="label">Repite la contraseña</label>
                    <input type="password" id="new-password" placeholder="********" className="input input-password"/>
                    <input type="submit" value="Confirmar" className="primary-button login-button"/>
                </form>
            </div>
        </div>
     );
}
 
export default New_password;