/* eslint-disable react/jsx-max-depth */
import { checkIsUserLoggedin } from '@services';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';

import avatar from '@public/images/avatar/eric.jpg';
import gameIcon from '@public/images/game-icon/deadoralive.jpg';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = checkIsUserLoggedin();

    if (!user) {
      router.push('/login');
    }
  }, [router]);

  return (
    <Fragment>
      <Head>
        <title>Comeon</title>
        <meta name='description' content='Starter Pack' />
      </Head>
      <div className='casino'>
        <div className='grid ui centered'>
          <div className='twelve wide column'>
            <div className='ui list'>
              {/* <!-- player item template --> */}
              <div className='player item'>
                <Image className='ui avatar image' src={avatar} alt='avatar' />

                <div className='content'>
                  <div className='header'>
                    <b className='name' />
                  </div>
                  <div className='description event' />
                </div>
              </div>
              {/* <!-- end player item template --> */}
            </div>
            <div className='logout ui left floated secondary button inverted'>
              <i className='left chevron icon' />
              Log Out
            </div>
          </div>
          <div className='four wide column'>
            <div className='search ui small icon input '>
              <input type='text' placeholder='Search Game' />
              <i className='search icon' />
            </div>
          </div>
        </div>
        <div className='grid ui'>
          <div className='twelve wide column'>
            <h3 className='ui dividing header'>Games</h3>

            <div className='ui relaxed divided game items links'>
              {/* <!-- game item template --> */}
              <div className='game item'>
                <div className='ui small image'>
                  <Image src={gameIcon} alt='game-icon' />
                </div>
                <div className='content'>
                  <div className='header'>
                    <b className='name' />
                  </div>
                  <div className='description' />
                  <div className='extra'>
                    <div className='play ui right floated secondary button inverted'>
                      Play
                      <i className='right chevron icon' />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end game item template --> */}
            </div>
          </div>
          <div className='four wide column'>
            <h3 className='ui dividing header'>Categories</h3>

            <div className='ui selection animated list category items'>
              {/* <!-- category item template --> */}
              <div className='category item'>
                <div className='content'>
                  <div className='header' />
                </div>
              </div>
              {/* <!-- end category item template --> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
