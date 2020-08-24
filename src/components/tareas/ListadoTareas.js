import React, {Fragment, useContext} from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const ListadoTareas = () => {

  // Obtener el state de proyecto
  const proyectosContext = useContext(proyectoContext)
  const {proyecto, eliminarProyecto} = proyectosContext;

  // obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const {tareasProyecto} = tareasContext;


  // si no hay proyecto selecionado
  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>
  }

  // proyecto viene como un areglo. Extraigo la pocision uno y la nombro proyectoActual
  const [proyectoActual] = proyecto;



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
                  key={tarea.id}
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
