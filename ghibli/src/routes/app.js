import { lazy } from 'react';

import { getRoutesArray } from './manager';

const HomePage = lazy(() => import('~/domains/HomePage'));
const FormPage = lazy(() => import('~/domains/FormPage'));
const UploadFilePage = lazy(() => import('~/domains/UploadFilePage'));
const CreateUpdateExamplePage = lazy(() => import('~/domains/CreateUpdateExamplePage'));
const ListExamplePage = lazy(() => import('~/domains/ListExamplePage'));
const DialogExamplePage = lazy(() => import('~/domains/DialogExamplePage'));
const FileListViewExamplePage = lazy(() => import('~/domains/FileListViewExamplePage'));

const ROUTES = [
    {
        path: '/',
        menuKey: '/',
        component: HomePage,
        text: 'Home',
        icon: {
            name: 'dashboard',
        },
        exact: true,
    },
    {
        path: '/form',
        menuKey: '/form',
        component: FormPage,
        text: 'Formulários',
        icon: {
            name: 'featured-play-list',
        },
    },
    {
        path: '/list',
        menuKey: '/list',
        component: ListExamplePage,
        text: 'Listagem',
        icon: {
            name: 'list',
        },
    },
    {
        path: '/create-update',
        menuKey: '/create-update',
        component: CreateUpdateExamplePage,
        text: 'Cadastro e edição',
        icon: {
            name: 'add-to-queue',
        },
    },
    {
        path: '/upload-file',
        menuKey: '/upload-file',
        component: UploadFilePage,
        text: 'Upload de arquivos',
        icon: {
            name: 'cloud-upload',
        },
    },
    {
        path: '/dialogs',
        menuKey: '/dialogs',
        component: DialogExamplePage,
        text: 'Dialogs',
        icon: {
            name: 'desktop-windows',
        },
    },
    {
        path: '/file-list-view',
        menuKey: '/file-list-view',
        component: FileListViewExamplePage,
        text: 'File List View',
        icon: {
            name: 'image',
        },
    },
];

export default ROUTES;

export const allRoutes = getRoutesArray({
    group: 'root',
    routes: ROUTES,
});
