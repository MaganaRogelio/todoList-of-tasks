import React from 'react';
import { Link } from 'react-router-dom';
import '../css/not_found.css'

const NotFound = () => <div className="not-found">
    <figure className="image">
        <img src="https://http.cat/404" alt="Error 404" />
    </figure>
    <h2 className=" is-size-4 has-text-danger">El contenido al que se busca acceder no existe</h2>
    <Link to="/">
        <button className="button is-medium is-fullwidth">Back to Home</button>
    </Link>
</div>

export default NotFound;