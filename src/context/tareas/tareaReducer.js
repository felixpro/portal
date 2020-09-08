
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA
} from '../../types';



export default (state, action) => {
  switch (action.type) {

    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasProyecto: action.payload
      }

    case AGREGAR_TAREA:
      return {
        ...state,
        tareasProyecto: [...state.tareasProyecto, action.payload ]
      }

    case VALIDAR_TAREA:
      return {
        ...state,
        errortarea: true
      }

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareasProyecto: state.tareasProyecto.filter(tarea => tarea.id !== action.payload)
      }

      case ACTUALIZAR_TAREA:
        return {
          ...state,
          tareasProyecto: state.tareasProyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea),
        }

    case TAREA_ACTUAL:
      return {
        ...state,
        tareaseleccionada: action.payload
      }



    default:
      return state;
  }
}
