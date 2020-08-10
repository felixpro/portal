import React from 'react'

const Barra = ({proyecto}) => {

  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Felix Pujols</span>
      </p>

      <nav className="nav-principal">
        <a href="#!">Cerrar Sesion</a>
      </nav>
    </header>
  )
}


export default Barra;
