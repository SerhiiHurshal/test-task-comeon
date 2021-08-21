import { FC } from 'react';

const ErrorMessageWrapper: FC = ({ children }) => (
  <div className='w-56 mx-auto text-base text-left text-red-500'>
    {children}
  </div>
);

export { ErrorMessageWrapper };
