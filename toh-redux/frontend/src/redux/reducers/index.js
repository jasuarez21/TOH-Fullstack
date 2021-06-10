import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import selectedHeroReducer from './selectedheroReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  hero: selectedHeroReducer,
  auth: authReducer
});

export default rootReducer;
