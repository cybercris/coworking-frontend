import { object, string } from 'yup';

export default object().shape({
  email: string()
    .email('Email inválido')
    .required('Este campo é obrigatório'),
  password: string().required('Este campo é obrigatório'),
});
