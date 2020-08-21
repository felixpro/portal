import React, {Fragment, useContext} from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoTareas = () => {

  // Obtener el state de proyecto
  const proyectosContext = useContext(proyectoContext)
  const {proyecto, eliminarProyecto} = proyectosContext;

  // si no hay proyecto selecionado
  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>
  }

  // proyecto viene como un areglo. Extraigo la pocision uno y la nombro proyectoActual
  const [proyectoActual] = proyecto;

   const tareasProyecto = [
     {nombre: 'Elegir plataforma', estado: true},
     {nombre: 'Elegir Colores', estado: false},
     {nombre: 'Elegir Pltaforma de pago', estado: false},
     {nombre: 'Elegir Hosting', estado: false},
   ];

  // Elimina un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id)
  }

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0
          ?
          (<li className="tarea"><p>No hay tareas</p></li>)
          :
          tareasProyecto.map(tarea => (
          <Tarea
            tarea={tarea}
          />
          ))
        }
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
        >
          Eliminar Proyecto &times;
        </button>

    </Fragment>

  )
}


export default ListadoTareas;
