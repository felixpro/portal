

import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer'

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA
} from '../../types';

const TareaState = props => {
  const initialState = {
    tareas: [
      {id: 1, nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
      {id: 2, nombre: 'Elegir Colores', estado: false,      proyectoId: 2},
      {id: 3, nombre: 'Elegir Pltaforma de pago', estado: false,  proyectoId: 3},
      {id: 4, nombre: 'Elegir Hosting', estado: false,  proyectoId: 4},
      {id: 5, nombre: 'Elegir Fritura', estado: true, proyectoId: 3},
      {id: 6, nombre: 'Elegir taxi', estado: false,      proyectoId: 1},
      {id: 7, nombre: 'Elegir Floreria de pago', estado: false,  proyectoId: 3},
      {id: 8, nombre: 'Elegir Pezcaderia', estado: false,  proyectoId: 4},
      {id: 9, nombre: 'Elegir Zapateria', estado: true, proyectoId: 1},
      {id: 10, nombre: 'Elegir Libros', estado: false,      proyectoId: 3},
      {id: 11, nombre: 'Elegir Drones de pago', estado: false,  proyectoId: 3},
      {id: 12, nombre: 'Elegir Electronica', estado: false,  proyectoId: 4},
    ],
    tareasProyecto: null,
    errortarea: false
  }

// crear dispath y state
const [state, dispath] = useReducer(TareaReducer, initialState);

// crear las funcions para el dispatch


// Obtener las tareas de un proyecto
const obtenerTareas = proyectoId => {
  dispath({
    type: TAREAS_PROYECTO,
    payload: proyectoId
  })
}


// Agregar una tarea a un proyecto Seleccionado
const agregarTarea = tarea => {
  dispath({
    type: AGREGAR_TAREA,
    payload: tarea
  })
}


// Valida y muestra un error en caso de que sea necesario
const validarTarea = () => {
  dispath({
    type: VALIDAR_TAREA

  })
}


// Eliminar una tarea por id
const eliminarTarea = id => {
  dispath({
    type: ELIMINAR_TAREA,
    payload: id

  })
}


return (
  <TareaContext.Provider
    value={{
      tareas: state.tareas,
      tareasProyecto: state.tareasProyecto,
      errortarea:state.errortarea,
      obtenerTareas,
      agregarTarea,
      validarTarea,
      eliminarTarea

    }}
    >
    {props.children}
  </TareaContext.Provider>
)

}


export default TareaState;
