import Image from 'next/image';
import { Player } from '@models';
import { FC } from 'react';

const PlayerInfo: FC<Player> = ({ avatar, name, event }) => (
  <section className='ui list'>
    <div className='flex items-center gap-x-3'>
      <Image
        className='ui avatar image'
        src={`/${avatar}`}
        alt='avatar'
        width={50}
        height={50}
      />

      <aside className='content'>
        <div className='header'>
          <b className='name'>{name}</b>
        </div>
        <div className='description event'>{event}</div>
      </aside>
    </div>
  </section>
);

export { PlayerInfo };
