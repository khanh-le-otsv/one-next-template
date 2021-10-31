import fsPromises from 'fs/promises';
import path from 'path';
import { CounterAPI } from './types';

const FILE_PATH = path.resolve(process.cwd(), 'src/modules/counter/api/db.json');

export async function readDB(): Promise<CounterAPI> {
  const content = await fsPromises.readFile(FILE_PATH, 'utf-8');
  return JSON.parse(content);
}

async function writeDB(count: number) {
  const newDBData = JSON.stringify({ count });
  await fsPromises.writeFile(FILE_PATH, newDBData, 'utf-8');
}

export async function increase(): Promise<number> {
  const dbData = await readDB();
  const newCount = dbData.count + 1;
  await writeDB(newCount);
  return newCount;
}

export async function decrease(): Promise<number> {
  const dbData = await readDB();
  const newCount = Math.max(dbData.count - 1, 0);
  await writeDB(newCount);
  return newCount;
}
