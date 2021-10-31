import axios from 'axios';
import { CounterAPI } from '.';

export function getCounter() {
  return axios.get<never, CounterAPI>('/api/counter');
}
