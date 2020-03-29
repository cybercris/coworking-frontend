import { createReducer, createActions } from 'reduxsauce';
import produce from 'immer';

/* Types & Action Creators */
export const { Types, Creators } = createActions({
  // actionType: ['dataPassed'],
  siginCompanyRequest: ['email', 'password'],
  siginCompanySuccess: ['company'],
  siginCompanyError: [],
});

/* Initial State */
export const INITIAL_STATE = {
  loading: false,
  data: {
    id: '',
    email: '',
    name: '',
    linkedin: '',
    logo: '',
    techs: [],
    street: '',
    number: '',
    complement: '',
    phone: '',
    spots: [],
  },
};

/* Reducers */
const siginCompanyRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const siginCompanySuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.data.id = action.company.id;
    draft.data.email = action.company.email;
    draft.data.name = action.company.name;
    draft.data.linkedin = action.company.linkedin;
    draft.data.logo = action.company.logo;
    draft.data.techs = action.company.techs;
    draft.data.number = action.company.number;
    draft.data.complement = action.company.complement;
    draft.data.phone = action.company.phone;
    draft.data.spots = action.company.spots;
    draft.data.street = action.company.street;
    draft.loading = true;
  });

const siginCompanyError = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

/* Reducers to types */
export default createReducer(INITIAL_STATE, {
  // [Types.ACTION_TYPE]: reducer,
  [Types.SIGIN_COMPANY_REQUEST]: siginCompanyRequest,
  [Types.SIGIN_COMPANY_SUCCESS]: siginCompanySuccess,
  [Types.SIGIN_COMPANY_ERROR]: siginCompanyError,
});
