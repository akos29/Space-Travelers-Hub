import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserve, cancelReserve } from '../../redux/rockets/rocketSlice';
import styles from './DisplayRocket.module.css';

function DisplayRocket({
  rocId, rocketName, description, flickrImages, reserved,
}) {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={flickrImages} alt={rocketName} />
      </div>
      <div className={styles.detail}>
        <h3>{rocketName}</h3>
        <div>
          { reserved ? <button type="button" className="badge">Reserved</button>
            : null}
          {description}
        </div>

        {reserved ? <button type="button" className={styles.cancel} onClick={() => dispatch(cancelReserve(rocId))}>Cancel Reservation</button> : <button id={rocId} type="button" onClick={() => { dispatch(reserve(rocId)); }}> Reserve Rocket</button>}

      </div>
    </div>
  );
}

DisplayRocket.defaultProps = {
  rocketName: 'Falcon 1',
  description: 'Hello',
  rocId: 1,
  flickrImages: '../../assets/logo.png',
  reserved: false,
};

DisplayRocket.propTypes = {
  rocketName: PropTypes.string,
  description: PropTypes.string,
  rocId: PropTypes.number,
  flickrImages: PropTypes.string,
  reserved: PropTypes.bool,
};

export default DisplayRocket;
