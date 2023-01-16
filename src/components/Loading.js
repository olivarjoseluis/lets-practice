import React from 'react'

function Loading({ dir }) {
    return (
        <div className='p-3 justify-content-center align-items-center text-center' >
            <lord-icon class="icon-animation" trigger="loop" src={dir}></lord-icon>
            <h2 className='text-center'>Cargando...</h2>
        </div>
    )
}

export default Loading