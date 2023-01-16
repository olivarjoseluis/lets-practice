import React, { createContext, useState } from 'react'

function Provider(props) {
    const [state, setState] = useState({});
    return (
        <>
            <AppContext.Provider value={[state, setState]}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}

export default Provider;
export const AppContext = createContext();