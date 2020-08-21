import React, {Fragment,useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext)
  const {proyecto} = proyectosContext;

  // si no hay proyecto selecionado
  if (!proyecto) {
    return null
  }

  // proyecto viene como un areglo. Extraigo la pocision uno y la nombro proyectoActual
  const [proyectoActual] = proyecto;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  )
}


export default FormTarea;
