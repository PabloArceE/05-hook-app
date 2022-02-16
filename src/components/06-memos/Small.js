import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Hubo cambios y Small se renderizó');

  return (
    <small>
        { value }
    </small>
  )
}
)
