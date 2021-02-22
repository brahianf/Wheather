import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => (
  <div>
    <p>Esta Página no existe</p>
    <Link className='header__brand' to='/'>
        <p>Regresar al Incio</p>
    </Link>
  </div>
);

export default NotFound;
