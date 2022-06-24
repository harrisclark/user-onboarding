import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('First Name is required')
    .min(3, 'Username must be three or more characters long'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address is reqired'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be atleast 6 characters long'),
  tos: yup
    .boolean()
    .oneOf([true], 'Must accept the Terms of Service')
});

export default formSchema;