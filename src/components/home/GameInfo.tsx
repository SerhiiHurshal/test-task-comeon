import { Game } from '@models';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GameInfo: FC<Game> = ({ code, icon, description }) => (
  <li className='game item'>
    <aside className='ui small image'>
      <Image src={`/${icon}`} alt='game-icon' width={140} height={140} />
    </aside>
    <section className='content'>
      <header className='header'>
        <b className='name'>{code}</b>
      </header>
      <p className='description'>{description}</p>
      <div className='extra'>
        <Link href={`/game/${code}`}>
          <a className='play ui right floated secondary button inverted'>
            Play
            <i className='right chevron icon' />
          </a>
        </Link>
      </div>
    </section>
  </li>
);

export { GameInfo };
