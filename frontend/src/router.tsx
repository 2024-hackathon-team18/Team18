import { createBrowserRouter } from 'react-router-dom';

import TestPage from './pages/TestPage';

import ResultPage from './pages/ResultPage';
import LandingPage from './pages/LandingPage';
import TestPage2 from './pages/TestPage2';
import TestPage3 from './pages/TestPage3';
import TestPage5 from './pages/TestPage5';
import TestPage4 from './pages/TestPage4';
import TestPage6 from './pages/TestPage6';


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
    path: '/test2',
    element: <TestPage2 />
  },
  {
    path: '/test3',
    element: <TestPage3 />
  },
  {
    path: '/test4',
    element: <TestPage4 />
  },
  {
    path: '/test5',
    element: <TestPage5 />
  },
  {
    path: '/test6',
    element: <TestPage6 />
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
]);
