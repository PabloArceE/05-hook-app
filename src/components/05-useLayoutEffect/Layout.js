import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "./layout.css";

export const Layout = () => {

  const {counter, increment} = useCounter(1);
 
  const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${ counter }`);
  
  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
   setBoxSize( pTag.current.getBoundingClientRect() );
  }, [ quote ])
    
  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />
      
      <div className="alert alert-info text-center">Loading...</div>        
      
      <blockquote className="blockquote text-end ">
        <p 
          className="mb-0"
          ref={ pTag }
        >
          { quote }
        </p>          
      </blockquote>

      <pre>
        {JSON.stringify( boxSize, null, 3 )}  
      </pre>    

      <button 
        className="btn btn-outline-primary" 
        onClick={ increment }
      >
        Next Quote
      </button>
     
    </div>
  );
};
