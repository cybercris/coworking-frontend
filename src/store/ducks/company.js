import { createReducer, createActions } from 'reduxsauce';
import produce from 'immer';

/* Types & Action Creators */
export const { Types, Creators } = createActions({
  // actionType: ['dataPassed'],
  siginCompanyRequest: ['email', 'password'],
  siginCompanySuccess: ['companyId'],
  siginCompanyError: [],
  getCompanyByIdRequest: ['companyId'],
  getCompanyByIdSuccess: ['company'],
  getCompanyByIdError: [],
  getSpotsRequest: ['companyId'],
  getSpotsSuccess: ['spots'],
  getSpotsError: [],
});

/* Initial State */
export const INITIAL_STATE = {
  loading: false,
  loadingHeader: false,
  loadingSpots: false,
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
  },
  spots: [],
};

/* Reducers */
const siginCompanyRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const siginCompanySuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.data.id = action.companyId;
    draft.loading = false;
  });

const siginCompanyError = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

const getCompanyByIdRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loadingHeader = true;
  });

const getCompanyByIdSuccess = (state = INITIAL_STATE, action) =>
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
    draft.data.street = action.company.street;
    draft.loadingHeader = false;
  });

const getCompanyByIdError = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loadingHeader = false;
  });

const getSpotsRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loadingSpots = true;
  });

const getSpotsSuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.spots = action.spots;
    draft.loadingSpots = false;
  });

const getSpotsError = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loadingSpots = false;
  });

/* Reducers to types */
export default createReducer(INITIAL_STATE, {
  // [Types.ACTION_TYPE]: reducer,
  [Types.SIGIN_COMPANY_REQUEST]: siginCompanyRequest,
  [Types.SIGIN_COMPANY_SUCCESS]: siginCompanySuccess,
  [Types.SIGIN_COMPANY_ERROR]: siginCompanyError,
  [Types.GET_COMPANY_BY_ID_REQUEST]: getCompanyByIdRequest,
  [Types.GET_COMPANY_BY_ID_SUCCESS]: getCompanyByIdSuccess,
  [Types.GET_COMPANY_BY_ID_ERROR]: getCompanyByIdError,
  [Types.GET_SPOTS_REQUEST]: getSpotsRequest,
  [Types.GET_SPOTS_SUCCESS]: getSpotsSuccess,
  [Types.GET_SPOTS_ERROR]: getSpotsError,
});
