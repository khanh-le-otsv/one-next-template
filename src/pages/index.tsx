import * as React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Link href="/counter">
        <a>Counter App</a>
      </Link>
    </div>
  );
}
