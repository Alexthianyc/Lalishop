import React from 'react';
import '../styles/password_recovery2.scss';

const Password_recovery2 = () => {
    return ( 
        <div className="login">
        <div className="form-container">
            <img src="../image//logo_lalishop.png" alt="logo" className="logo"/>
            <h1 className="title">El correo ha sido enviado</h1>
            <p className="subtitle email-subtitle">Por favor, compruebe su buzón de correo electrónico para obtener instrucciones sobre cómo restablecer su contraseña</p>
            <div className="email-image">
                <img src="../image//email.svg" alt="email"/>
            </div>
            <input value="Iniciar sesion" className="primary-button login-button" type="submit"/>
            <p className="resend">
                <span>
                    No recibiste el correo electrónico 
                </span>
                <a href="#">Reenviar</a>
            </p>
        </div>
    </div>
     );
}
 
export default Password_recovery2;