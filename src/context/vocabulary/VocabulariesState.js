import axios from 'axios';
import React, { useReducer } from 'react';
import VocabulariesContext from './VocabulariesContext';
import VocabulariesReducer from './VocabulariesReducer';


function VerbsState(props) {

    const initialState = {
        especific_group: [],
        summary_groups: []
    }

    const [state, dispatch] = useReducer(VocabulariesReducer, initialState);

    const getSummaryGroups = () => {
        fetch("./data/vocabularies/summary.json").then(
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
        axios.get(`./../../../data/vocabularies/group-${id}.json`)
            .then(res => {
                dispatch({ type: 'GET_ESPECIFIC_GROUP', payload: res.data })
            })
    }
    return (
        <VocabulariesContext.Provider value={{
            especific_group: state.especific_group,
            summary_groups: state.summary_groups,
            getEspecificGroup,
            getSummaryGroups
        }} >
            {props.children}
        </VocabulariesContext.Provider>
    )
}

export default VerbsState