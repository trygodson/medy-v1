import { lazy } from 'react';
// import LandingPage from '../pages/LandingPage/landingPage';

const LandingPage = lazy(() => import('../pages/LandingPage/landingPage'));
const LoginPage = lazy(() => import('../pages/Auth/Login'));
const RegisterPage = lazy(() => import('../pages/Auth/Register'));

export const routes = [
  {
    path: '/',
    component: LandingPage,
    exact: true,
    guarded: false,
  },
  {
    path: '/login',
    component: LoginPage,
    guarded: false,
  },
  {
    path: '/register',
    component: RegisterPage,
    guarded: false,
  },
];
