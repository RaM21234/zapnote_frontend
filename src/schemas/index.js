import * as Yup from 'yup';
export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});
export const SignupValidationSchema = Yup.object({
  name: Yup.string()
    .min(4, 'Name must be at least 4 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  cpassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Confirm password is required')
});

