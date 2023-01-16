import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width={90} className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/verbos">Verbos</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/vocabularios">Vocabularios</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/expresiones-utiles">Expresiones útiles</NavLink >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar