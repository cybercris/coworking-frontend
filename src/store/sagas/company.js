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
      CompanyActions.siginCompanySuccess(responseCompanySigin.data.companyId)
    );

    localStorage.setItem('companyId', `${responseCompanySigin.data.companyId}`);

    history.push('/dashboard');
  } catch (error) {
    toast.error('Email ou senha invalidos!');
    yield put(CompanyActions.siginCompanyError());
  }
}

export function* getCompanyById({ companyId }) {
  try {
    const responseCompany = yield call(api.get, `/company/${companyId}`);

    yield put(
      CompanyActions.getCompanyByIdSuccess({
        id: responseCompany.data.company._id,
        email: responseCompany.data.company.email,
        name: responseCompany.data.company.name,
        linkedin: responseCompany.data.company.linkedin,
        logo: responseCompany.data.company.logo,
        techs: responseCompany.data.company.techs,
        street: responseCompany.data.company.street,
        number: responseCompany.data.company.number,
        complement: responseCompany.data.company.complement,
        phone: responseCompany.data.company.phone,
        spots: responseCompany.data.company.spots,
      })
    );
  } catch (error) {
    yield put(CompanyActions.getCompanyByIdError());
  }
}
