import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import App from '@/App';
import About from '@/pages/About';
import MinimaxProject from '@/pages/MinimaxProject';
import NotFound from '@/pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/minimax',
    element: <MinimaxProject />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
