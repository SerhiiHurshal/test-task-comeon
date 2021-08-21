import Image from 'next/image';
import { Player } from '@models';
import { FC } from 'react';
import classNames from 'classnames';

const PlayerInfo: FC<Player> = ({ avatar, name, event }) => (
  <section className={classNames('ui list', 'flex items-center gap-x-3')}>
    <Image
      className='ui avatar image'
      src={`/${avatar}`}
      alt='avatar'
      width={50}
      height={50}
    />

    <aside className='content'>
      <header className='header'>
        <b className='name'>{name}</b>
      </header>
      <p className='description event'>{event}</p>
    </aside>
  </section>
);

export { PlayerInfo };
