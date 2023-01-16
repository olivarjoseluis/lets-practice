import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import UsefulExpressionsContext from '../context/useful_expressions/UsefulExpressionsContext';
import uniqueRandom from 'unique-random';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Loading from '../components/Loading';


function UsefulExpressionsPracticePage() {
    const params = useParams();
    const { getEspecificGroup, especific_group } = useContext(UsefulExpressionsContext);
    const randomopcion = uniqueRandom(1, 4);
    const [count, setCount] = useState(0);
    const test = [];

    function generateOpcionNumber(omit) {
        const random = uniqueRandom(1, (especific_group.length - 2));
        let arrayNumber = Array.from(Array(especific_group.length).keys());
        arrayNumber.splice(omit, 1);
        let numeros = [arrayNumber[(random() - 1)], arrayNumber[(random() - 1)], arrayNumber[(random() - 1)]];
        return numeros;
    }
    function generateTest() {

        for (let i = 0; i < especific_group.length; i++) {
            let original, correcta, opcion1, opcion2, opcion3;
            let pibo = (Math.floor(Math.random() * 2) + 1);
            let numbers = generateOpcionNumber(i);

            if (pibo === 1) {
                original = especific_group[i]['original'];
                correcta = especific_group[i]['es'][0];
                opcion1 = especific_group[numbers[0]]['es'][0];
                opcion2 = especific_group[numbers[1]]['es'][0];
                opcion3 = especific_group[numbers[2]]['es'][0];
            } else {
                original = especific_group[i]['es'][0];
                correcta = especific_group[i]['original'];
                opcion1 = especific_group[numbers[0]]['original'];
                opcion2 = especific_group[numbers[1]]['original'];
                opcion3 = especific_group[numbers[2]]['original'];
            }
            test.push([{ original: original, correcta: correcta, opcion1: opcion1, opcion2: opcion2, opcion3: opcion3, done: false }]);
        }
    }
    const validation = (e, option) => {
        if (option) {
            setCount(count + 1);
        } else {
            e.target.classList.add('animate__animated', 'animate__headShake');
            setTimeout(() => {
                e.target.classList.remove('animate__animated');
                e.target.classList.remove('animate__headShake');
            }, 500)
        }
    }

    useEffect(() => {
        //localStorage.setItem("verbs", JSON.stringify(verbs));
        getEspecificGroup(params.id);
    }, []);
    generateTest();
    return (
        <div className='container container-practice mt-4'>
            <div className='row'>

                <div className='col-12'>
                    {
                        test && test.length > 0 ?
                            count < test.length ?
                                <div className='card card-practice p-3' >
                                    <h2 className='text-center my-4 pb-4'>{test[count][0].original}</h2>
                                    <div className="row">
                                        <div className="col-6" id={`opcion-${randomopcion()}`}>
                                            <div className="wrappers-buttons">
                                                <button className={'buttons'} onClick={(e) => validation(e, true)} >{test[count][0].correcta}</button>
                                            </div>
                                        </div>
                                        <div className="col-6" id={`opcion-${randomopcion()}`}>
                                            <div className="wrappers-buttons">
                                                <button className={'buttons'} onClick={(e) => validation(e, false)}>{test[count][0].opcion1}</button>
                                            </div>
                                        </div>
                                        <div className="col-6" id={`opcion-${randomopcion()}`}>
                                            <div className="wrappers-buttons">
                                                <button className={'buttons'} onClick={(e) => validation(e, false)} >{test[count][0].opcion2}</button>
                                            </div>
                                        </div>
                                        <div className="col-6" id={`opcion-${randomopcion()}`}>
                                            <div className="wrappers-buttons">
                                                <button className={'buttons'} onClick={(e) => validation(e, false)} >{test[count][0].opcion3}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='card card-practice p-3 justify-content-center align-items-center' >
                                    <h2 className='text-center'>¡Haz terminado esta lección!</h2>
                                    <lord-icon class="icon-animation" trigger="loop" src="./icons/1103-confetti-outline-edited.json"></lord-icon>
                                    <div className="footer-final">
                                        <Link className='btn btn-lg btn-primary mt-4' to="/expresiones-utiles">Volver al inicio</Link>
                                    </div>
                                </div>
                            :
                            <Loading dir={"./icons/1957-maneki-cat-outline-edited.json"} />
                    }
                </div>
                <div className="col-12">
                    <ProgressBar label={`${parseInt((count / test.length) * 100)}%`} now={(count / test.length) * 100} />
                </div>
            </div>
        </div >
    )
}

export default UsefulExpressionsPracticePage