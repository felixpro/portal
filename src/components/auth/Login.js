import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Login = () => {


  // state para crear session
  const [usuario, guardarUsuario] = useState({
    email: '',
    password:''
  })

  // extraer de guardarUsuario
  const {email, password} = usuario;


  // actualizar el state
  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

// Inicio de sesion del ususario
const onSubmit = e => {
  e.preventDefault();

  // Validar que no haya campos vacios

  // Pasarlo por action

}


  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesiòn</h1>

        <form
          onSubmit={onSubmit}
          >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesion"
            />
          </div>

        </form>
        <Link to={'/nueva-cuenta'} className="enlace-cuenta" >
          Obtener Cuenta
        </Link>

      </div>
    </div>
  );
}


export default Login;
