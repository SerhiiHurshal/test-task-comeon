import { Game } from '@models';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Return = [
  Game[] | null,
  {
    searchInputValue: string;
    setSearchInputValue: ({
      target,
    }: React.ChangeEvent<HTMLInputElement>) => void;
  },
  {
    selectedCategory: number;
    setSelectedCategory: Dispatch<SetStateAction<number>>;
  },
];

const ALL_GAMES_CATEGORY_ID = 0;

const useFilteredGames = (games: Game[]): Return => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    ALL_GAMES_CATEGORY_ID,
  );
  const [filteredGames, setFilteredGames] = useState(games);

  const updateSearchInputValue = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(target.value);
  };

  useEffect(() => {
    const filtered = games.filter(
      ({ categoryIds, code }) =>
        categoryIds.includes(selectedCategory) &&
        code.includes(searchInputValue),
    );

    setFilteredGames(filtered);
  }, [searchInputValue, selectedCategory, games]);

  return [
    filteredGames,
    { searchInputValue, setSearchInputValue: updateSearchInputValue },
    {
      selectedCategory,
      setSelectedCategory,
    },
  ];
};

export { useFilteredGames };
