import { PlayerInfo } from '@components/home/PlayerInfo';
import { Player } from '@models';
import { logoutUser } from '@services';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';

type Props = {
  user: Player;
  searchInputValue: string;
  setSearchInputValue: ({ target }: ChangeEvent<HTMLInputElement>) => void;
};

const Header: FC<Props> = ({ user, searchInputValue, setSearchInputValue }) => {
  const router = useRouter();

  const logout = async () => {
    if (user?.name) {
      await logoutUser(user?.id);
      router.push('/login');
    }
  };

  return (
    <header className='grid ui centered'>
      <section className='twelve wide column'>
        <PlayerInfo {...user} />
        <button
          className='logout ui left floated secondary button inverted'
          onClick={logout}
        >
          <i className='left chevron icon' />
          Log Out
        </button>
      </section>
      <aside
        className={classNames('four wide column', 'search ui small icon input')}
      >
        <input
          type='text'
          placeholder='Search Game'
          value={searchInputValue}
          onChange={setSearchInputValue}
        />
        <i className='search icon before:-ml-3' />
      </aside>
    </header>
  );
};

export { Header };
