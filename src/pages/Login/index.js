import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import formValidator from './form_validator';
import { Creators as CompanyActions } from '../../store/ducks/company';
import {
  Container,
  Box,
  Title,
  Form,
  Text,
  SInput,
  BButton,
  Error,
} from './styles';

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.company.loading);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: formValidator,
    onSubmit: (values, e) => {
      e.preventDefault();
      dispatch(
        CompanyActions.siginCompanyRequest(values.email, values.password)
      );
    },
  });

  return (
    <Container>
      <Box>
        <Title>LOGIN</Title>
        <Form onSubmit={formik.handleSubmit} autoComplete="off">
          <SInput
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.email && formik.touched.email ? 'error' : ''
            }
            marginError={!!(formik.errors.email && formik.touched.email)}
          />
          {formik.errors.email && formik.touched.email && (
            <Error
              marginError={!!(formik.errors.email && formik.touched.email)}
            >
              {formik.errors.email}
            </Error>
          )}
          <SInput
            type="password"
            name="password"
            id="paswword"
            placeholder="Senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.password && formik.touched.password ? 'error' : ''
            }
            marginError={!!(formik.errors.password && formik.touched.password)}
          />
          {formik.errors.password && formik.touched.password && (
            <Error
              marginError={
                !!(formik.errors.password && formik.touched.password)
              }
            >
              {formik.errors.password}
            </Error>
          )}
          <BButton type="submit" title="Entrar" loading={loading} />
        </Form>
        <Text to="/logup">Cadastrar</Text>
      </Box>
    </Container>
  );
}
