import { createReducer, createActions } from 'reduxsauce';
import produce from 'immer';

/* Types & Action Creators */
export const { Types, Creators } = createActions({
  // actionType: ['dataPassed'],
});

/* Initial State */
export const INITIAL_STATE = {
  loading: false,
};

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  // [Types.ACTION_TYPE]: reducer,
});
