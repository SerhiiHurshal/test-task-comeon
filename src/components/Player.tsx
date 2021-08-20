import Image from 'next/image';
import { Player } from '@models';

type Props = {
  user: Player;
};

const PlayerInfo = ({ user }: Props) => (
  <div className='ui list'>
    <div className='flex items-center gap-x-3'>
      <Image
        className='ui avatar image'
        src={`/${user?.avatar}`}
        alt='avatar'
        width={50}
        height={50}
      />

      <div className='content'>
        <div className='header'>
          <b className='name'>{user.name}</b>
        </div>
        <div className='description event'>{user.event}</div>
      </div>
    </div>
  </div>
);

export { PlayerInfo };
