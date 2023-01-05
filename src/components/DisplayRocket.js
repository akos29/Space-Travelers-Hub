/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { reserve, cancelReserve } from '../redux/rockets/rocketSlice'
import styles from './DisplayRocket.module.css';


function DisplayRocket({
  rocId, rocket_name, description, flickr_images,reserved
}) {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={flickr_images} alt={rocket_name} />
      </div>
      <div className={styles.detail}>
        <h3>{rocket_name}</h3>
        {reserved ? <button type='button'>Reserved</button>:null}
        <p>{description}</p>
        {reserved ? <button type='button' onClick={() => dispatch(cancelReserve(rocId)) } >Cancel Reservation</button>:<button id={rocId} type="button" onClick={() => { dispatch(reserve(rocId))}} > Reserve Rocket</button>}
        
      </div>
    </div>
  );
}

DisplayRocket.defaultProps = {
  rocket_name: 'Falcon 1',
  description: 'Hello',
  rocId: 1,
  flickr_images: '../../assets/logo.png',
};

DisplayRocket.propTypes = {
  rocket_name: PropTypes.string,
  description: PropTypes.string,
  rocId: PropTypes.number,
  flickr_images: PropTypes.string,
};

export default DisplayRocket;
