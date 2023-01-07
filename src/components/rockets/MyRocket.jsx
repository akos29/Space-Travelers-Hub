import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myReservations } from '../../redux/rockets/rocketSlice';

function MyRocket() {
  const dispatch = useDispatch();
  const myRockReservation = useSelector((state) => state.rockets.bookedRockets);
  useEffect(() => {
    dispatch(myReservations());
  }, []);

  return (
    
    <>
      {
        myRockReservation.length > 0 ? myRockReservation.map((roc) => (
          <li key={roc.id}>
            {' '}
            {roc.rocket_name}
            {' '}
          </li>
        )) : "You haven't booked any rocket yet"
      }
    </>
  );
}

export default MyRocket;
