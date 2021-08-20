import { Game } from '@models';
import { FC } from 'react';
import Image from 'next/image';

const GameInfo: FC<Game> = ({ code, icon, description }) => (
  <section className='game item'>
    <div className='ui small image'>
      <Image src={`/${icon}`} alt='game-icon' width={140} height={140} />
    </div>
    <aside className='content'>
      <header className='header'>
        <b className='name'>{code}</b>
      </header>
      <div className='description'>{description}</div>
      <div className='extra'>
        <button className='play ui right floated secondary button inverted'>
          Play
          <i className='right chevron icon' />
        </button>
      </div>
    </aside>
  </section>
);

export { GameInfo };
