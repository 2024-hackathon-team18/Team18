import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
]);
