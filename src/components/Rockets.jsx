import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DisplayRocket from './DisplayRocket';
import { getRockets } from '../redux/rockets/rocketSlice';

function Rockets() {
  const dispatch = useDispatch();
  const rockStatus = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (rockStatus === 'idle') {
      dispatch(getRockets());
    }
  }, [rockStatus, dispatch]);

  const rockets = useSelector((state) => state.rockets.rockets);

  if (rockets.length) {
    return (
      <>
        {
        rockets.map((result) => (
          <DisplayRocket
            key={result.id}
            rocId={result.id}
            rocketName={result.rocket_name}
            description={result.description}
            flickrImages={result.flickr_images[0]}
            reserved={result.reserved}
          />
        ))
        }
      </>
    );
  }
}

export default Rockets;
