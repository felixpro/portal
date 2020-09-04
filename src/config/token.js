import clienteAxios from './axios';

const tokenAuth = token => {
  if (token) {
    // Si hay un token lo mando al header de cuando haga el post
    clienteAxios.defaults.headers.common['x-auth-token'] = token;
  }else {
    delete clienteAxios.defaults.headers.common['x-auth-token'];
  }
}


export default tokenAuth;
