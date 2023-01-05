import spaceApi from '../../apis/spaceAPI';

const RESERVE_ROCKETS = 'spacetravelershub/rocketsReducer/RESERVE_ROCKETS';
const REGISTER_ROCKETS = 'spacetravelershub/rocketsReducer/REGISTER_ROCKETS';
const CANCEL_RESERVATION = 'spacetravelershub/rocketsReducer/CANCEL_RESERVATION';

// const initialState = {
//   id: 1,
//   rocket_name: 'Apollo 11',
//   description: '',
//   flickr_images: 'https://imgur.com/DaCfMsj.jpg',
// };

export default function rocketReducer(state = [], action = {}) {
  switch (action.type) {
    case RESERVE_ROCKETS:
      return action.payload;
    case REGISTER_ROCKETS:
      return [...state, action.payload];
    case CANCEL_RESERVATION:
      return [...state.filter((book) => (book.id !== action.payload))];
    default: return state;
  }
}

export const displayRockets = () => async (dispatch) => {
  try {
    await spaceApi.get('/rockets')
      .then((res) => {
        dispatch({ type: REGISTER_ROCKETS, payload: res.data });
      });
  } catch (err) {
    console.log('Something went wrong');
  }
};

export const recordRockets = (rockets) => ({ type: REGISTER_ROCKETS, payload: rockets });
