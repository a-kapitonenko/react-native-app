import * as types from './types';

export const setMode = (mode) => ({
  type: types.SET_MODE,
  payload: mode,
});
