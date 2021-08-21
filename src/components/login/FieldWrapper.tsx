import { ErrorMessage, Field } from 'formik';
import { FC } from 'react';
import { ErrorMessageWrapper } from './ErrorMessageWrapper';

type Props = {
  type: string;
  name: string;
  placeholder: string;
  icon: string;
};

const FieldWrapper: FC<Props> = ({ type, name, placeholder, icon }) => (
  <div className='required field'>
    <div className='ui icon input'>
      <Field type={type} name={name} placeholder={placeholder} />
      <i className={`${icon} icon`} />
    </div>
    <ErrorMessageWrapper>
      <ErrorMessage name={name} />
    </ErrorMessageWrapper>
  </div>
);

export { FieldWrapper };
