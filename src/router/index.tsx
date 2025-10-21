import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import App from '@/App';
import About from '@/pages/About';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

export const router = createBrowserRouter(routes);
