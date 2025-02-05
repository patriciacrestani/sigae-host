import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { HomeComponent } from './app/pages/home/home.component';
import { Login } from './app/pages/auth/login';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Access } from './app/pages/auth/access';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        // canActivate: [],
        // redirectTo: 'access',
        children: [
            { path: '', component: HomeComponent },
            { path: 'plano-acao', loadComponent: () => loadRemoteModule('plano-acao', './Component').then((m)=> m.AppComponent) },
            // { path: 'cadastros', loadComponent: () => loadRemoteModule('cadastros', './Component').then((m)=> m.AppComponent) },
            // { path: 'agenda', loadComponent: () => loadRemoteModule('agenda', './Component').then((m)=> m.AppComponent) }
        ]
    },
    { path: 'login', component: Login },
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'notfound', component: Notfound },
    // { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
