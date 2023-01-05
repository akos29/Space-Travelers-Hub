/* eslint-disable  */
import React, {useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import spaceApi from '../apis/spaceAPI';
import DisplayRocket from './DisplayRocket';
import { displayRockets, recordRockets } from '../redux/rockets/rocketSlice';

function Rockets() {
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(displayRockets());
  }, [dispatch]);

  const rockets = useSelector(state => state.rockets.rockets);
 
  if(rockets.length){
      return <>{
        rockets.map((result) => {
          return <DisplayRocket key={result.id}
          rocket_name={result.rocket_name}
          description={result.description}
          flickr_images={result.flickr_images[0]} 
          reserved={result.reserved ? true : false}
          /> 
        })
        }</>
    }
  
}

export default Rockets;
