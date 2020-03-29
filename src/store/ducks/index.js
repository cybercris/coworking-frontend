import { combineReducers } from 'redux';

import company from './company';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  company,
});

export default reducers;
