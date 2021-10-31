import { useQuery } from 'react-query';
import { getCounter } from '../../api';

export function useCounterQuery() {
  const { data, error, status } = useQuery('counter', {
    queryFn() {
      return getCounter();
    },
    refetchOnMount: false,
    staleTime: Infinity,
  });

  return { data, error, status };
}
