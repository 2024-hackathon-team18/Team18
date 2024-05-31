import { createBrowserRouter } from 'react-router-dom';

import TestPage from './pages/TestPage';

import ResultPage from './pages/ResultPage';
import LandingPage from './pages/LandingPage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/test',
    element: <TestPage />
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
]);
