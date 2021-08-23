import nc from 'next-connect';
import type { NextApiResponse } from 'next';

const categories = [
  {
    id: 0,
    name: 'ALL',
  },
  {
    id: 1,
    name: 'VIDEO SLOTS',
  },
  {
    id: 2,
    name: 'SLOT MACHINES',
  },
];

const handler = nc().get((_, res: NextApiResponse) => {
  res.status(200).json(categories);
});

export default handler;
