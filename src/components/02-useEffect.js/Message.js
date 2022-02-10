import React, {useEffect, useState} from 'react'

export const Message = ({name}) => {

  const [coords, setCoors] = useState({x:0, y:0});
  
  const {x, y} = coords;

  useEffect(() => {
   
    console.log('Componente montado')

    const mouseMove = (e) => {
        setCoors({
            x: e.x,
            y: e.y
        })
    }

    window.addEventListener('mousemove', mouseMove);
  
    return () => {
      console.log('Componente desmontado');

      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);
    

  return (
    <div>
        <h1>Hola {name}!!!</h1>
        <hr/>
        <h2>Las coordenadas de tu mouse son:</h2>
        <h3>X: {x}</h3>
        <h3>Y: {y}</h3>
    </div>
  )
}
