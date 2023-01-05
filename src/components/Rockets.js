/* eslint-disable  */
import React, {useEffect,useState} from 'react';
import spaceApi from '../apis/spaceAPI';
import DisplayRocket from './DisplayRocket';

function Rockets() {
  const [results, setResults]= useState([]);
  const [errorMessage, setErrorMessage] =useState("");
  const fetchRockets = async () => {
    try{
      const res = await spaceApi.get('/rockets')
      setResults(res.data);
    } catch(err) {
      setErrorMessage("Something went wrong");
    }
    
  };
  
  useEffect (() => {
    fetchRockets();
  }, []);


  if(results.length){
      return <>{
        results.map((result) => {
          return <DisplayRocket key={result.id}
          rocket_name={result.rocket_name}
          description={result.description}
          flickr_images={result.flickr_images[0]}  /> 
        })
        }</>
    }
  
}

export default Rockets;
