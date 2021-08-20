import { FC, Fragment } from 'react';
import Image from 'next/image';

import logo from '../../public/images/logo.svg';

const Layout: FC = ({ children }) => (
  <Fragment>
    <div className='grid ui one column center aligned page'>
      <div className='column twelve wide'>
        <Image src={logo} alt='logo' width={609} height={114} />
      </div>
    </div>
    <div className='container main'>{children}</div>
  </Fragment>
);

export { Layout };
