import axios from 'axios';

export const types = {
  FETCH_EVENTS: 'events/FETCH_EVENTS',
  FETCH_EVENTS_SUCCESS: 'events/FETCH_EVENTS_SUCCESS',
  FETCH_EVENTS_FAIL: 'events/FETCH_EVENTS_FAIL',

  FETCH_EVENT_DETAILS: 'events/FETCH_EVENT_DETAILS',
  FETCH_EVENT_DETAILS_SUCCESS: 'events/FETCH_EVENT_DETAILS_SUCCESS',
  FETCH_EVENT_DETAILS_FAIL: 'events/FETCH_EVENT_DETAILS_FAIL',
};

const API_URL = 'https://api.github.com/users/tater';

export const fetchEvents = () => async dispatch => {
  try {
    dispatch({type: types.FETCH_EVENTS});
    const data = await axios.get(`${API_URL}/events`);
    dispatch({type: types.FETCH_EVENTS_SUCCESS});
    console.log(data, ' data events >>');
  } catch (error) {
    dispatch({type: types.FETCH_EVENTS_FAIL});
    console.warn(error, ' data error >>');
  }
};

export const fetchEventDetails = id => ({});
