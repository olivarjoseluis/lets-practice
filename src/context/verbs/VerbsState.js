import axios from 'axios';
import React, { useReducer } from 'react';
import VerbsContext from './VerbsContext';
import VerbsReducer from './VerbsReducer';


function VerbsState(props) {

    const initialState = {
        especific_group: [],
        summary_groups: []
    }

    const [state, dispatch] = useReducer(VerbsReducer, initialState);

    const getSummaryGroups = () => {
        fetch("./data/verbs/summary.json").then(
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
        axios.get(`./../../../data/verbs/group-${id}.json`)
            .then(res => {
                dispatch({ type: 'GET_ESPECIFIC_GROUP', payload: res.data })
            })
    }
    return (
        <VerbsContext.Provider value={{
            especific_group: state.especific_group,
            summary_groups: state.summary_groups,
            getEspecificGroup,
            getSummaryGroups
        }} >
            {props.children}
        </VerbsContext.Provider>
    )
}

export default VerbsState