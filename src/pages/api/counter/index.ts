import { NextApiRequest, NextApiResponse } from 'next';
import { CounterAPI, readDB } from 'src/modules/counter/node';

export default async function getCounterAPI(req: NextApiRequest, res: NextApiResponse<CounterAPI>) {
  const counter = await readDB();
  res.json(counter);
}
