import axios from 'axios';
import React, { useReducer } from 'react';
import UsefulExpressionsContext from './UsefulExpressionsContext';
import UsefulExpressionsReducer from './UsefulExpressionsReducer';


function VerbsState(props) {

    const initialState = {
        especific_group: [],
        summary_groups: []
    }

    const [state, dispatch] = useReducer(UsefulExpressionsReducer, initialState);

    const getSummaryGroups = () => {
        fetch("./data/useful_expressions/summary.json").then(
            function (res) {
                return res.json()
            }).then(function (data) {
                dispatch({ type: 'GET_SUMMARY_GROUPS', payload: data });
            }).catch(
                function (err) {
                    console.log(err, ' error')
                }
            )
    }
    const getEspecificGroup = (id) => {
        axios.get(`./../../../data/useful_expressions/group-${id}.json`)
            .then(res => {
                dispatch({ type: 'GET_ESPECIFIC_GROUP', payload: res.data })
            })
    }
    return (
        <UsefulExpressionsContext.Provider value={{
            especific_group: state.especific_group,
            summary_groups: state.summary_groups,
            getEspecificGroup,
            getSummaryGroups
        }} >
            {props.children}
        </UsefulExpressionsContext.Provider>
    )
}

export default VerbsState