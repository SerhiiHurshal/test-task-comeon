import { ErrorMessageWrapper } from '@components/ErrorMessageWrapper';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { checkUserCreds, loginUser } from '@services';
import { useRouter } from 'next/router';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginPage = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setErrors }) => {
        const response = await checkUserCreds(values);

        if (response.status === 'fail') {
          console.log(response.status);

          setErrors({ password: response.error });
        } else if (response.player) {
          loginUser(response.player);
          router.push('/');
        }
      }}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);

        return (
          <div className='login'>
            <div className='grid ui centered'>
              <Form>
                <div className='fields'>
                  <div className='required field'>
                    <div className='ui icon input'>
                      <Field
                        type='text'
                        name='username'
                        placeholder='Username'
                      />
                      <i className='user icon' />
                    </div>
                    <ErrorMessageWrapper>
                      <ErrorMessage name='username' />
                    </ErrorMessageWrapper>
                  </div>
                  <div className='required field'>
                    <div className='ui icon input'>
                      <Field
                        type='password'
                        name='password'
                        placeholder='Password'
                      />
                      <i className='lock icon' />
                    </div>
                    <ErrorMessageWrapper>
                      <ErrorMessage name='password' />
                    </ErrorMessageWrapper>
                  </div>
                  <div className='field'>
                    <button
                      type='submit'
                      className='ui icon input'
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      <input type='submit' value='Login' />
                      <i className='right chevron icon' />
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default LoginPage;
