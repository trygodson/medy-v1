import { lazy } from 'react';
// import LandingPage from '../pages/LandingPage/landingPage';

const LandingPage = lazy(() => import('../pages/LandingPage/landingPage'));

export const routes = [
  {
    path: '/',
    component: LandingPage,
    exact: true,
    guarded: false,
  },
    {
      path: '/login',
      component: null,
      guarded: false,
    },
    {
      path: '/register',
      component: null,
      guarded: false,
    },
];
