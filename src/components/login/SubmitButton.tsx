import { FormikProps } from 'formik';
import { FC } from 'react';

type Props = {
  formik: FormikProps<{
    username: string;
    password: string;
  }>;
};

const SubmitButton: FC<Props> = ({ formik }) => (
  <button
    type='submit'
    className='ui icon input field'
    disabled={!formik.isValid || formik.isSubmitting}
  >
    <input type='submit' value='Login' />
    <i className='right chevron icon before:-ml-2' />
  </button>
);

export { SubmitButton };
