import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { queryClient } from '@/lib/queryClient';
import { router } from '@/router';
import { store } from '@/store';
import '@/styles/globals.css';

const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root: Root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
