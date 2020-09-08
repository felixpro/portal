import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {

// Extraer proyectos de state incial
  const proyectosContext = useContext(proyectoContext)
  const {mensaje, proyectos, obtenerProyectos} = proyectosContext;

// Extraer proyectos de state incial
  const alertaContext = useContext(AlertaContext)
  const {alerta, mostrarAlerta } = alertaContext;


  // una ves que este componente carge mando a llamar mis proyectos
  useEffect(() => {
    // SI hay un error
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    obtenerProyectos()
  }, [mensaje])

// Proyectos tiene contenidos?
if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno.</p>;

  return (
    <ul className="listado-proyectos">

      {alerta ? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> :null}
      {proyectos.map(proyecto => (
      <Proyecto
        key={proyecto._id}
      proyecto={proyecto}
      />
      ))}
    </ul>
  )
}


export default ListadoProyectos;
