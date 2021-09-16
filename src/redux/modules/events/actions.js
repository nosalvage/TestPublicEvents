import axios from 'axios';

export const types = {
  FETCH_EVENTS: 'events/FETCH_EVENTS',
  FETCH_EVENTS_SUCCESS: 'events/FETCH_EVENTS_SUCCESS',
  FETCH_EVENTS_FAIL: 'events/FETCH_EVENTS_FAIL',

  // FETCH_EVENT_DETAILS: 'events/FETCH_EVENT_DETAILS',
  // FETCH_EVENT_DETAILS_SUCCESS: 'events/FETCH_EVENT_DETAILS_SUCCESS',
  // FETCH_EVENT_DETAILS_FAIL: 'events/FETCH_EVENT_DETAILS_FAIL',
};

// const API_URL = 'https://api.github.com/users/tater';
const API_URL = 'https://api.github.com';


/**
 * 
 * @param {Number} params.perPage Results per page (max 100) Default: 30
 * @param {Number} params.page Page number of the results to fetch Default: 1
 * @returns 
 */
export const fetchEvents = (params = {}) => async dispatch => {
  try {
    dispatch({ type: types.FETCH_EVENTS });

    const { perPage = 25, page = 1 } = params;
    const url = `${API_URL}/events`;
    const headers = { 'Accept': 'application/vnd.github.v3+json' };
    const result = await axios.get(url, {
      headers,
      params: {
        per_page: perPage,
        page,
      }
    })

    // :TODO Обработать другие статусы?
    if (result.status !== 200) {
      dispatch({ type: types.FETCH_EVENTS_FAIL });

      return;
    }

    dispatch({ type: types.FETCH_EVENTS_SUCCESS, payload: result.data });
    // console.log(data, ' data events >>');
  } catch (error) {
    // :TODO Выводить ошибку?
    dispatch({ type: types.FETCH_EVENTS_FAIL });
    console.warn(error, ' data error >>');
  }
};

export const fetchEventDetails = id => ({});
