import { combineReducers } from 'redux';
import { FooterReducer } from '../store/footer/reducer';

export const rootReducer = combineReducers({
  footer: FooterReducer,
});
