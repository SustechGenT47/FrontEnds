import React from "react";
import './Login.css';


function Login() {


    return( <div className="main App" id="dark">
        <p className="sign">Bem vindo  a <br>

        </br>Sustech </p>
        <form className="form">
            <input type="text" className="username" placeholder="Usuário" />
            <input type="password" className="password" placeholder="Senha" />
            <a href="#" className="submit">
                Entrar
            </a>
            <p className="forgot">
                <a href="#" >

                    Nao tem uma conta ? Criar conta
                </a>


            </p>
        </form>
    </div>


    );

};

export default Login;