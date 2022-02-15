import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {

  const isMounted = useRef(true);

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
  
    return () => {
      isMounted.current = false;
      console.log('useEffect component has been desmounted')
    }
  }, [])

  useEffect(() => {

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {

        setTimeout(() => {
          
          { 
            isMounted.current 
            &&            
            setState({
              loading: false,
              error: null,
              data,
            });
          }  
        }, 1000);

      });

  }, [url]);

  return state;
};
