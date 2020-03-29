import { all, takeLatest } from 'redux-saga/effects';

import { siginCompany, getCompanyById, getSpotsByCompanyId } from './company';
import { Types } from '../ducks/company';

export default function* rootSaga() {
  yield all([
    takeLatest(Types.SIGIN_COMPANY_REQUEST, siginCompany),
    takeLatest(Types.GET_COMPANY_BY_ID_REQUEST, getCompanyById),
    takeLatest(Types.GET_SPOTS_REQUEST, getSpotsByCompanyId),
  ]);
}
