

import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer'

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA
} from '../../types';

import clienteAxios from '../../config/axios'

const TareaState = props => {
  const initialState = {
    tareasProyecto: [],
    errortarea: false,
    tareaseleccionada: null
  }

// crear dispath y state
const [state, dispath] = useReducer(TareaReducer, initialState);

// crear las funcions para el dispatch


// Obtener las tareas de un proyecto
const obtenerTareas = async proyecto => {

  // console.log(proyecto)

  try {
    const resultado = await clienteAxios.get('/api/tareas', {params: {proyecto}})
    // console.log(resultado)

    dispath({
      type: TAREAS_PROYECTO,
      payload: resultado.data.tareas
    })


  } catch (error) {
    console.log(error)
  }


}


// Agregar una tarea a un proyecto Seleccionado
const agregarTarea = async tarea => {

  try {

  const resultado = await clienteAxios.post('/api/tareas', tarea)
  console.log(resultado)

    dispath({
      type: AGREGAR_TAREA,
      payload: tarea
    })

  } catch (error) {
  console.log(error)


  }

}


// Valida y muestra un error en caso de que sea necesario
const validarTarea = () => {
  dispath({
    type: VALIDAR_TAREA

  })
}


// Eliminar una tarea por id
const eliminarTarea = async (id, proyecto) => {

  try {

    await clienteAxios.delete(`/api/tareas/${id}`, {params: {proyecto}})

    dispath({
      type: ELIMINAR_TAREA,
      payload: id
    })

  } catch (error) {
    console.log(error)
  }



}

// Cambia el estado de cada tarea
const actualizarTarea = async tarea => {
  try {
    const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
    console.log(resultado)

    dispath({
      type: ACTUALIZAR_TAREA,
      payload: tarea
    })

  } catch (error) {
    console.log(error)
  }

}



// Extrae una tarea para edición
const guardarTareaActual = tarea => {
  dispath({
    type: TAREA_ACTUAL,
    payload: tarea

  })
}



return (
  <TareaContext.Provider
    value={{

      tareasProyecto: state.tareasProyecto,
      errortarea:state.errortarea,
      tareaseleccionada: state.tareaseleccionada,
      obtenerTareas,
      agregarTarea,
      validarTarea,
      eliminarTarea,
      guardarTareaActual,
      actualizarTarea,

    }}
    >
    {props.children}
  </TareaContext.Provider>
)

}


export default TareaState;
