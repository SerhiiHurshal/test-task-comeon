import { getCategories, getGames } from '@services';
import { FC, Fragment } from 'react';
import { Category, Game } from '@models';
import { useUserAuth } from 'src/hooks/use-user-auth';
import { useFilteredGames } from 'src/hooks/use-filtered-games';
import { Header } from '@components/home/Header';
import { GamesSection } from '@components/home/GamesSection';
import { CategoriesSection } from '@components/home/CategoriesSection';

type Props = {
  games: Game[];
  categories: Category[];
};

const HomePage: FC<Props> = ({ games, categories }) => {
  const user = useUserAuth();
  const [
    filteredGames,
    { searchInputValue, setSearchInputValue },
    { selectedCategory, setSelectedCategory },
  ] = useFilteredGames(games);

  if (!user) return null;

  return (
    <Fragment>
      <Header
        user={user}
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      <main className='grid ui'>
        <GamesSection filteredGames={filteredGames} />
        <CategoriesSection
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </main>
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const games = await getGames();
  const categories = await getCategories();

  return {
    props: {
      games,
      categories,
    },
  };
};

export default HomePage;
