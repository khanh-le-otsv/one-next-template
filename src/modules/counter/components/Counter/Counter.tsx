import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useCounterQuery } from '../../hooks';

export function Counter() {
  const { data, status } = useCounterQuery();

  if (status !== 'success') {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex align-items-center">
      <Button>-</Button>

      <span className="px-3">{data?.count ?? 0}</span>

      <Button>+</Button>
    </div>
  );
}
