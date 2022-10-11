import React from 'react';
import '../styles/NewPassword.scss';

import logo_lalishop from 'logos/logo_lalishop.png';

const New_password = () => {
    return ( 
        <div className="login">
            <div className="form-container">
                <img src={logo_lalishop} alt="logo" className="logo"/>
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