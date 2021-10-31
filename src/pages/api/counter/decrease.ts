import { NextApiRequest, NextApiResponse } from 'next';
import { CounterAPI, decrease } from 'src/modules/counter/node';

export default async function decreaseAPI(req: NextApiRequest, res: NextApiResponse<CounterAPI>) {
  const count = await decrease();
  res.send({ count });
}
