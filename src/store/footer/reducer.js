import * as types from './types';
import { MODES } from '../../constants/footer';

const initialState = {
  isFetching: false,
  error: '',
	mode: MODES.ARTICLES,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MODE: {
      return {
        ...state,
        mode: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as FooterReducer };
