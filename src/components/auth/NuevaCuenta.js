import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const NuevaCuenta = () => {


  // state para crear session
  const [usuario, guardarUsuario] = useState({
    nombre: '',
    email: '',
    password:'',
    confirmar: '',
  })

  // extraer de guardarUsuario
  const {nombre, email, password, confirmar} = usuario;


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
        <h1>Obtener una cuenta</h1>

        <form
          onSubmit={onSubmit}
          >

            <div className="campo-form">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                value={nombre}
                onChange={onChange}
              />
            </div>
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
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>

        </form>
        <Link to={'/'} className="enlace-cuenta" >
          Volver a Iniciar Sesion
        </Link>

      </div>
    </div>
  );
}


export default NuevaCuenta;
