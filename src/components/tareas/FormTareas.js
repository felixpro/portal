import React, {useContext, useState, useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext)
  const {proyecto} = proyectosContext;

  // obtener la funcion del context de tareas
  const tareasContext = useContext(tareaContext);
  const {agregarTarea, validarTarea, errortarea, obtenerTareas, tareaseleccionada, actualizarTarea} = tareasContext;


  // Effect que detecta si hay una tarea seleecionada.  Si hay un cambio en el componente o en tareaseleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
        guardarTarea(tareaseleccionada)
    }else{
      guardarTarea({
        nombre: '',
      })
    }
  }, [tareaseleccionada]);


  // state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: '',
  })



  // si no hay proyecto selecionado
  if (!proyecto) {
    return null
  }

  // proyecto viene como un areglo. Extraigo la pocision uno y la nombro proyectoActual
  const [proyectoActual] = proyecto;

// Leer los valores del formulario
const handleChange = e => {
  guardarTarea({
    ...tarea,
    [e.target.name] : e.target.value
  })
}

// extraer el nombre del proyectos
const {nombre} = tarea;

const onSubmit = e => {
  e.preventDefault();

// Validar
if (nombre.trim() === '') {
  validarTarea();
  return // para que se detenga la ejecucion
}


// Si es edicion o si es nueva tarea
if (tareaseleccionada === null) {
  // agregar la tarea al state
  tarea.proyecto = proyectoActual._id;
  agregarTarea(tarea);
}else {
  // actualizar tarea
  actualizarTarea(tarea)
}



// Obtener las tareas
obtenerTareas(proyectoActual.id);

// Reiniciar el form
guardarTarea({
  nombre: ""
})
}


  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
        >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Guardar Tarea"}
          />
        </div>
      </form>
      {errortarea ? <p className="mensaje error">Nombre de la tarea es obligatorio</p> : null}
    </div>
  )
}


export default FormTarea;
