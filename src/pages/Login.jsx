import React, { useRef } from 'react';
import "../styles/Login.css"


export const Login = () => {

    const form = useRef(null);

    /*funcion para manejar el submit del form*/
    const handleSubmit = (event) =>{
        event.preventDefault(); //evita que se envie la inf por url y siga con la logica
        const formData = new FormData(form.current); 
        const data = {
            usename:  formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="login"> 
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>

                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Correo electrónico</label>
                    <input type="text" name="email" placeholder="example@example.com" className="input input-email"/>

                    <label htmlFor="password" className="label">Contraseña</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password"/>

                    <button onClick={handleSubmit} className="primary-button login-button">Iniciar sesión</button>

                    <a href="/">Olvide mi contraseña</a>
                </form>

            <button className="secondary-button signup-button" >Crear cuenta</button>
            </div>
        </div>
    )
}