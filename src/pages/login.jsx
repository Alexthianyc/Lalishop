import React from 'react';
import '../styles/login.scss';

import logo_lalishop from '@logos/logo_lalishop.png';

const Login = () => {
    return ( 
        <div className="login">
            <div className="form-container">
                <img src={logo_lalishop} alt="logo" className="logo" />
                <form action="#" className="form">
                    <label for="email" className="label">Direccion de correo</label>
                    <input type="email" id="email" className="input input-email" />
                    <label for="password" className="label">Contraseña</label>
                    <input type="password" id="password" placeholder="********" className="input input-password" />
                    <input type="submit" value="Iniciar sesion" className="primary-button login-main-button" />
                    <a href="#" >Olvidé mi contraseña</a>
                </form>
                <button className="secondary-button signup-button">Registrarse</button>
            </div>
        </div>
    );
}
 
export default Login;