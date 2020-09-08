import React, { useContext, useEffect} from 'react';
import { Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';



const RutaPrivada = ({component: Component, ...props}) => {

  const authContext = useContext(AuthContext)
  const { autenticado, usuarioAutenticado, cargando } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

// Render se usa para verificar si el usuario esta autenticado antes de renderizarlo
  return (
    <Route
      {...props}
      render={props => !autenticado && !cargando ? (
        <Redirect to="/" /> // Si el usuario no esta autenticado lo mando a la pagina principal
      ) : (
      <Component {...props} />
      )}
      >
    </Route>
  );
}



export default RutaPrivada;
