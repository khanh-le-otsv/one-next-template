import axios, { AxiosResponse } from 'axios';
import { CounterAPI } from '.';

export function getCounter() {
  return axios.get<never, AxiosResponse<CounterAPI>>('/api/counter').then((res) => res.data);
}
