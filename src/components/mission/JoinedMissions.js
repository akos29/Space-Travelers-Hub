import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { myMissions } from '../../redux/missions/missionSlice';

const JoinedMissions = () => {
  const dispatch = useDispatch();
  const myMissionsJoined = useSelector((state) => state.missions.joinedMissions);
  useEffect(() => {
    dispatch(myMissions());
  }, []);

  return (
    <>
      {myMissionsJoined.length > 0
        ? myMissionsJoined.map((mission) => (
          <li className="list-item" key={mission.mission_id}>
            {mission.mission_name}
          </li>
        ))
        : "You haven't joined any missions yet"}
    </>
  );
};

export default JoinedMissions;
