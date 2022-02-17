import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Hubo un cambio y ShowIncrement se volvión a renderizar');

  return (
    <button
        className='btn btn-primary'
        onClick={() => {
            increment(5);
        }}
    >
        Incrementar
    </button>
  )
}
)