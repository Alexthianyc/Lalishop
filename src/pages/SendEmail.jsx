import React from 'react';
import '../styles/SendEmail.scss';

import email from 'icons/email.svg';
import logo_lalishop from 'logos/logo_lalishop.png';

const SendEmail = () => {
    return ( 
        <div className="login">
        <div className="form-container">
            <img src={logo_lalishop} alt="logo" className="logo"/>
            <h1 className="title">El correo ha sido enviado</h1>
            <p className="subtitle email-subtitle">Por favor, compruebe su buzón de correo electrónico para obtener instrucciones sobre cómo restablecer su contraseña</p>
            <div className="email-image">
                <img src={email} alt="email"/>
            </div>
            <input value="Iniciar sesion" className="primary-button login-button" type="submit"/>
            <p className="resend">
                <span>
                    No recibiste el correo electrónico 
                </span>
                <a href="/"> Reenviar</a>
            </p>
        </div>
    </div>
     );
}
 
export default SendEmail;