import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "../../styles.css";

export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1);

  
  let URL = `https://breakingbadapi.com/api/quotes/${ counter }`
  
  const { loading, data } = useFetch(URL);
  
  const { author, quote } = !!data && data[0];
  
  const handleRandom = () => {
    
  };
  
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading 
      ? 
        (
          <div className="alert alert-info text-center">Loading...</div>
        ) 
      : (
        <blockquote className="blockquote text-end ">
          <p className="mb-0">{ quote }</p>
          <footer className="blockquote-footer mt-0">{ author }</footer>
        </blockquote>
        )
      }

      <button 
        className="btn btn-outline-primary" 
        onClick={ increment }>
        Next Quote
      </button>

      <button 
        className="btn btn-outline-primary m-5" 
        onClick={ handleRandom }>
        Random Quote
      </button>

    </div>
  );
};
