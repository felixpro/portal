import React, {Fragment, useState} from 'react'

const NuevoProyecto = () => {

  // state para este proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  });

 // Extraer nombre de proyecto
 const {nombre} = proyecto;

// Lee los contenidos del input
  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name] : e.target.value
    })
  }

// Cuando el ususario envia un proyecto
const onSubmitProyecto = e => {
  e.preventDefault(); // Evita que redirija la pagina

  // validar el proyecto


  // agregar al state


  // reiniciar el form

}

  return (

    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        >
        Nuevo Proyecto
      </button>
      <form
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmitProyecto}
        >

        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          onChange={onChangeProyecto}
          value={nombre}
        />

        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar proyecto"
        />

      </form>
    </Fragment>
  )
}


export default NuevoProyecto;
