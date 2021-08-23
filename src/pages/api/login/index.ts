import nc from 'next-connect';

import type { NextApiRequest, NextApiResponse } from 'next';

interface Player {
  name: string;
  avatar: string;
  event: string;
  password?: string;
}

const players: { [x: string]: Player } = {
  rebecka: {
    name: 'Rebecka Awesome',
    avatar: 'images/avatar/rebecka.jpg',
    event: 'Last seen gambling on Starburst.',
    password: 'secret',
  },
  eric: {
    name: 'Eric Beard',
    avatar: 'images/avatar/eric.jpg',
    event: 'I saw you won 500 SEK last time!',
    password: 'dad',
  },
  stoffe: {
    name: 'Stoffe Rocker',
    avatar: 'images/avatar/stoffe.jpg',
    event: 'Your are a rock star',
    password: 'rock',
  },
};

const handler = nc().post((req: NextApiRequest, res: NextApiResponse) => {
  const username = req.body.username as string;
  const password = req.body.password as string;

  if (username in players && players[username].password === password) {
    const player = Object.assign({}, players[username]); //Creating a copy of player
    delete player.password;
    res.status(200).json({
      status: 'success',
      player,
    });
  } else {
    res.status(400).json({
      status: 'fail',
      error: 'player does not exist or wrong password',
    });
  }
});

export default handler;
