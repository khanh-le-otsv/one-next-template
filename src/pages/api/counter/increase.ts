import { NextApiRequest, NextApiResponse } from 'next';
import { CounterAPI, increase } from 'src/modules/counter/node';

export default async function increaseAPI(req: NextApiRequest, res: NextApiResponse<CounterAPI>) {
  const count = await increase();
  res.send({ count });
}
