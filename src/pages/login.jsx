import React, {useRef} from 'react';
import '../styles/Login.scss';

import logo_lalishop from 'logos/logo_lalishop.png';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }   

    return ( 
        <div className="login">
            <div className="form-container">
                <img src={logo_lalishop} alt="logo" className="logo" />
                <form action="/" className="form" ref={form}>
                    <label for="email" className="label">Direccion de correo</label>
                    <input type="email" name="email" className="input input-email" />
                    <label for="password" className="label">Contraseña</label>
                    <input type="password" name="password" placeholder="********" className="input input-password" />
                    <input type="submit" value="Iniciar sesion" onClick={handleSubmit} className="primary-button login-main-button" />
                    <a href="/send-email" >Olvidé mi contraseña</a>
                </form>
                <button className="secondary-button signup-button" onClick={() => hadleSingUp()}>Registrarse</button>
            </div>
        </div>
    );
}
 
export default Login;