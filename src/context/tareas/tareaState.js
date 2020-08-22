

import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer'

import {
  TAREAS_PROYECTO
} from '../../types';

const TareaState = props => {
  const initialState = {
    tareas: [
      {nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
      {nombre: 'Elegir Colores', estado: false,      proyectoId: 2},
      {nombre: 'Elegir Pltaforma de pago', estado: false,  proyectoId: 3},
      {nombre: 'Elegir Hosting', estado: false,  proyectoId: 4},
      {nombre: 'Elegir Fritura', estado: true, proyectoId: 3},
      {nombre: 'Elegir taxi', estado: false,      proyectoId: 1},
      {nombre: 'Elegir Floreria de pago', estado: false,  proyectoId: 3},
      {nombre: 'Elegir Pezcaderia', estado: false,  proyectoId: 4},
      {nombre: 'Elegir Zapateria', estado: true, proyectoId: 1},
      {nombre: 'Elegir Libros', estado: false,      proyectoId: 3},
      {nombre: 'Elegir Drones de pago', estado: false,  proyectoId: 3},
      {nombre: 'Elegir Electronica', estado: false,  proyectoId: 4},
    ],
  }

  // crear dispath y state
const [state, dispath] = useReducer(TareaReducer, initialState);

// crear las funcions para el dispatch


// Obtener las tareas de un proyecto

return (
  <TareaContext.Provider
    value={{
      tareas: state.tareas
    }}
    >
    {props.children}
  </TareaContext.Provider>
)

}


export default TareaState;
