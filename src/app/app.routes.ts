import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('@routes/home/home.routes')
    },
    {
        path: 'dashboard',
        loadChildren: () => import('@routes/dashboard/dashboard.routes')
    },
    {
        path: 'management',
        loadChildren: () => import('@routes/mgmt/mgmt.routes')
    },
    {
        path: '**',
        loadComponent: () => import('@routes/page-not-found').then((mod) => mod.PageNotFoundPageComponent),
    },
];
