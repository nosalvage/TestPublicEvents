import reducer from '../../../utils/reducer';

import {types} from './actions';

const initState = {
  data: [],
  selected: {},
  isFetching: false,
  isFetchingDetails: false,
};

export default reducer(initState, {
  [types.FETCH_EVENTS]: (state, action) => {
    return {
      ...state,
      isFetching: true,
    };
  },
  [types.FETCH_EVENTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetching: false,
    };
  },
  [types.FETCH_EVENTS_FAIL]: (state, action) => {
    return {
      ...state,
      isFetching: false,
    };
  },

  [types.FETCH_EVENT_DETAILS]: (state, action) => {
    return {
      ...state,
      isFetchingDetails: true,
    };
  },
  [types.FETCH_EVENT_DETAILS_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetchingDetails: false,
    };
  },
  [types.FETCH_EVENT_DETAILS_FAIL]: (state, action) => {
    return {
      ...state,
      isFetchingDetails: false,
    };
  },
});
