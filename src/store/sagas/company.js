import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import { Creators as CompanyActions } from '../ducks/company';

export function* siginCompany({ email, password }) {
  try {
    const responseCompanySigin = yield call(api.post, '/company/login', {
      email,
      password,
    });

    if (!responseCompanySigin.data.success) {
      toast.error(responseCompanySigin.data.message);
      yield put(CompanyActions.siginCompanyError());
      return;
    }

    yield put(
      CompanyActions.siginCompanySuccess({
        id: responseCompanySigin.data.company._id,
        email: responseCompanySigin.data.company.email,
        name: responseCompanySigin.data.company.name,
        linkedin: responseCompanySigin.data.company.linkedin,
        logo: responseCompanySigin.data.company.logo,
        techs: responseCompanySigin.data.company.techs,
        street: responseCompanySigin.data.company.street,
        number: responseCompanySigin.data.company.number,
        complement: responseCompanySigin.data.company.complement,
        phone: responseCompanySigin.data.company.phone,
        spots: responseCompanySigin.data.company.spots,
      })
    );

    history.push('/dashboard');
  } catch (error) {
    toast.error('Email ou senha invalidos!');
    yield put(CompanyActions.siginCompanyError());
  }
}
