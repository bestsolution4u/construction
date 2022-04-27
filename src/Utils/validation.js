import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .required()
    .email('This is not an email.'),
  password: Yup.string()
    .required()
    .min(2, 'Input more than 3 characters.'),
});

const validationSchemaEmail = Yup.object().shape({
  email: Yup.string()
    .required()
    .email('This is not an email.'),
});

const validationSchemaName = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(2, 'Input more than 3 characters.'),
});

const validationSchemaChangePassword = oldPasswordStr =>
  Yup.object().shape({
    oldPassword: Yup.string()
      .required('Please input old password.')
      .test(
        'match',
        'Old password is incorrect.',
        oldPassword => oldPassword === oldPasswordStr,
      ),
    password: Yup.string()
      .required('Password is required.')
      .min(3, 'Input more than 3 characters.'),
    confirmPassword: Yup.string()
      .required('Confirm password is required.')
      .oneOf([Yup.ref('password'), null], 'Passwords must be matched.'),
  });

const validationSchemaPhone = Yup.object().shape({
  phone: Yup.string()
    .required()
    .min(10, 'Phone number is not valid.')
    .matches(phoneRegExp, 'Phone number is not valid.')
    .test(
      'valid',
      'Phone number is not valid',
      phone =>
        (phone.startsWith('1') && phone.length === 11) ||
        (!phone.startsWith('1') && phone.length === 10),
    ),
});

const validationSchemaCreateTask = Yup.object().shape({
  title: Yup.string().required('Task title is required.'),
  description: Yup.string().required('Task description is required.'),
  address: Yup.string().required('Address is required.'),
  phone: Yup.string().required('Phone number is required.'),
  name: Yup.string().required('Client name is required.'),
  date: Yup.string().required('Date is required.'),
  time: Yup.string().required('Time is required.'),
  employee: Yup.string().required('Please assign an employee.'),
});

export {
  validationSchemaEmail,
  validationSchemaLogin,
  validationSchemaName,
  validationSchemaChangePassword,
  validationSchemaPhone,
  validationSchemaCreateTask,
};
