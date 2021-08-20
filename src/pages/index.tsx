import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';

import logo from '../../public/images/logo.svg';
import avatar from '../../public/images/avatar/eric.jpg';
import gameIcon from '../../public/images/game-icon/deadoralive.jpg';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Starter Pack</title>
        <meta name='description' content='Starter Pack' />
      </Head>
      <div className='grid ui one column center aligned page'>
        <div className='column twelve wide'>
          <Image src={logo} alt='logo' width={609} height={114} />
        </div>
      </div>
      <div className='container main'>
        <div className='login' style={{ display: 'none' }}>
          <div className='grid ui centered'>
            <form>
              <div className='fields'>
                <div className='required field'>
                  <div className='ui icon input'>
                    <input type='text' name='username' placeholder='Username' />
                    <i className='user icon' />
                  </div>
                </div>
                <div className='required field'>
                  <div className='ui icon input'>
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                    />
                    <i className='lock icon' />
                  </div>
                </div>
                <div className='field'>
                  <div className='ui icon input'>
                    <input type='submit' value='Login' />
                    <i className='right chevron icon' />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='casino' style={{ display: 'block' }}>
          <div className='grid ui centered'>
            <div className='twelve wide column'>
              <div className='ui list'>
                {/* <!-- player item template --> */}
                <div className='player item'>
                  <Image
                    className='ui avatar image'
                    src={avatar}
                    alt='avatar'
                  />

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
        <div className='ingame' style={{ display: 'none' }}>
          <div className='grid ui centered'>
            <div className='three wide column'>
              <div className='ui right floated secondary button inverted'>
                <i className='left chevron icon' />
                Back
              </div>
            </div>
            <div className='ten wide column'>
              <div id='game-launch' />
            </div>
            <div className='three wide column' />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
