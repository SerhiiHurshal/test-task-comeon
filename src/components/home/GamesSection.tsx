import { Game } from '@models';
import { FC } from 'react';
import { GameInfo } from '@components/home/GameInfo';

type Props = {
  filteredGames: Game[] | null;
};

const GamesSection: FC<Props> = ({ filteredGames }) => (
  <section className='twelve wide column'>
    <h3 className='ui dividing header'>Games</h3>

    <ul className='ui relaxed divided game items links'>
      {filteredGames &&
        filteredGames.map((game) => <GameInfo {...game} key={game.code} />)}
    </ul>
  </section>
);

export { GamesSection };
