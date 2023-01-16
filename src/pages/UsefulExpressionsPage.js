import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';
import UsefulExpressionsContext from '../context/useful_expressions/UsefulExpressionsContext';

function UsefulExpressionsPage() {
    const { getSummaryGroups, summary_groups } = useContext(UsefulExpressionsContext);
    useEffect(() => {
        getSummaryGroups();
    }, []);
    return (
        <div className='home-page page mt-4'>
            <div className='home-page page mt-4'>
                <div className='container'>
                    <h3 className='text-center'>¡Elige el grupo de expresiones útiles en el que deseas Practicar!</h3>
                    <div className='row justify-content-md-center g-0'>
                        {summary_groups && summary_groups.length > 0
                            ? summary_groups.map((item, index) =>
                                <div key={index} className="col-md-3 col-6 group-card">
                                    <Link to={'practica/grupo/' + (index + 1)} className="link-card">
                                        <div className='card card-groups  text-center'>
                                            <div className='text-card-group'>
                                                <h4 className='title-card-group'>{item.name_group}</h4>
                                                <p className='p-card-group'>{item.count} expresiones útiles</p>
                                            </div>
                                            <div className={`layout-bg bg-${Math.floor(Math.random() * 7) + 1}`}></div>
                                            <img src={`./assets/group-${Math.floor(Math.random() * 7) + 1}.jpg`} />
                                        </div>
                                    </Link>
                                </div>
                            )
                            :
                            <Loading dir={"./icons/1957-maneki-cat-outline-edited.json"} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsefulExpressionsPage