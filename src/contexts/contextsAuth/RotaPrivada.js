import React, { useContext, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';


  function RotaPrivada ({ component: Component, ...rest }) {

    // const { handleLogin } = useContext(Context);

  return (
    <Route></Route>
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     handleLogin() ? (
    //       <Component {...props} />
    //     ) : (
    //       <Navigate
    //         to="/"
    //       />
    //     )
    //   }
    // />
  );
};


export default RotaPrivada;

