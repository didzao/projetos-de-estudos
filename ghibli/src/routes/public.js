import { lazy } from 'react';

import { getRoutesArray } from './manager';

//const LandingPage = lazy(() => import('~/domains/LandingPage'));
// const LoginPage = lazy(() => import('~/domains/LoginPage'));
// const SignUpPage = lazy(() => import('~/domains/SignUpPage'));

const ROUTES = [
    // {
    //     path: '/',
    //     component: LandingPage,
    //     exact: true,
    // },
    // {
    //     path: '/login',
    //     component: LoginPage,
    // },
    // {
    //     path: '/signup',
    //     component: SignUpPage,
    // },
];

export default ROUTES;

export const allRoutes = getRoutesArray({
    group: 'root',
    routes: ROUTES,
});
