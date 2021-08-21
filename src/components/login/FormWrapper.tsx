import { Form, FormikProps } from 'formik';
import { FC } from 'react';
import { FieldWrapper } from './FieldWrapper';
import { SubmitButton } from './SubmitButton';

type Props = {
  formik: FormikProps<{
    username: string;
    password: string;
  }>;
};

const FormWrapper: FC<Props> = ({ formik }) => (
  <Form className='grid ui centered fields'>
    <FieldWrapper
      type='text'
      name='username'
      placeholder='Username'
      icon='user'
    />
    <FieldWrapper
      type='password'
      name='password'
      placeholder='Password'
      icon='lock'
    />
    <SubmitButton formik={formik} />
  </Form>
);

export { FormWrapper };
