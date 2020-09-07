import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';



const Proyecto = ({proyecto}) => {

  // Obtener el state de proyecto
  const proyectosContext = useContext(proyectoContext)
  const {proyectoActual} = proyectosContext;

  // obtener la funcion del context de tareas
  const tareasContext = useContext(tareaContext);
  const {obtenerTareas} = tareasContext;

  // Funcion para agregar el proyecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id) // Fijar un proyecto actual
    obtenerTareas(id) // Filrar las tareas al dar click

  }

  return (
    <li className="listado-proyectos">
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto._id)}
        >
        {proyecto.nombre}
      </button>
    </li>
  )
}


export default Proyecto;
