/* eslint-disable react/jsx-max-depth */
import {
  checkIsUserLoggedin,
  getCategories,
  getGames,
  logoutUser,
} from '@services';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Category, Game, Player } from '@models';
import { PlayerInfo } from '@components/PlayerInfo';
import { GameInfo } from '@components/GameInfo';
import { CategoryInfo } from '@components/CategoryInfo';

const ALL_GAMES_CATEGORY_ID = 0;

const HomePage = () => {
  const router = useRouter();

  const [user, setUser] = useState<Player | null>(null);
  const [games, setGames] = useState<Game[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);

  const [selectedCategory, setSelectedCategory] = useState(
    ALL_GAMES_CATEGORY_ID,
  );
  const [searchInputValue, setSearchInputValue] = useState('');

  const updateSearchInputValue = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(target.value);
  };

  const logout = async () => {
    if (user?.name) {
      await logoutUser(user?.name);
      router.push('/login');
    }
  };

  useEffect(() => {
    Promise.all([
      getGames().then((res) => setGames(res)),
      getCategories().then((res) => setCategories(res)),
    ]);
  }, []);

  useEffect(() => {
    const user = checkIsUserLoggedin();

    if (!user) {
      router.push('/login');
    } else {
      setUser(user);
    }
  }, [router]);

  if (!user || !games || !categories) return null;

  return (
    <Fragment>
      <Head>
        <title>Comeon</title>
      </Head>
      <Fragment>
        <header className='grid ui centered'>
          <div className='twelve wide column'>
            <PlayerInfo {...user} />
            <button
              className='logout ui left floated secondary button inverted'
              onClick={logout}
            >
              <i className='left chevron icon' />
              Log Out
            </button>
          </div>
          <div className='four wide column'>
            <div className='search ui small icon input '>
              <input
                type='text'
                placeholder='Search Game'
                value={searchInputValue}
                onChange={updateSearchInputValue}
              />
              <i className='search icon' />
            </div>
          </div>
        </header>
        <main className='grid ui'>
          <section className='twelve wide column'>
            <h3 className='ui dividing header'>Games</h3>

            <div className='ui relaxed divided game items links'>
              {games
                .filter(
                  ({ categoryIds, code }) =>
                    categoryIds.includes(selectedCategory) &&
                    code.includes(searchInputValue),
                )
                .map((game) => (
                  <Fragment key={game.code}>
                    <GameInfo {...game} />
                  </Fragment>
                ))}
            </div>
          </section>
          <aside className='four wide column'>
            <h3 className='ui dividing header'>Categories</h3>

            <div className='ui selection animated list category items'>
              {categories.map((category) => (
                <Fragment key={category.id}>
                  <CategoryInfo
                    {...category}
                    onClick={setSelectedCategory}
                    selectedCategory={selectedCategory}
                  />
                </Fragment>
              ))}
            </div>
          </aside>
        </main>
      </Fragment>
    </Fragment>
  );
};

export default HomePage;
