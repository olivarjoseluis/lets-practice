import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="container mt-4">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-3">
                        <Link to="/verbos" className="link-card">
                            <div className="card mt-3">
                                <img className="card-img-top" src={`./assets/group-${Math.floor(Math.random() * 7) + 1}.jpg`} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Verbos</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-3">
                        <Link to="/vocabularios" className="link-card">
                            <div className="card mt-3">
                                <img className="card-img-top" src={`./assets/group-${Math.floor(Math.random() * 7) + 1}.jpg`} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Vocabularios</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-3">
                        <Link to="/expresiones-utiles" className="link-card">
                            <div className="card mt-3">
                                <img className="card-img-top" src={`./assets/group-${Math.floor(Math.random() * 7) + 1}.jpg`} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Expresiones útiles</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home