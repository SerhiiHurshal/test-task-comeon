import nc from 'next-connect';

import type { NextApiRequest, NextApiResponse } from 'next';

const players = {
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

  if (username in players) {
    res.status(200).json({
      status: 'success',
    });
  } else {
    res.status(400).json({
      status: 'fail',
      error: 'Username do not match!',
    });
  }
});

export default handler;
