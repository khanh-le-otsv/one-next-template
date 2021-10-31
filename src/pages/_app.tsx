import { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import * as React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
