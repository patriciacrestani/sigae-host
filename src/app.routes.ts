import { mapToCanActivate, Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { HomeComponent } from './app/pages/home/home.component';
import { Login } from './app/pages/auth/login';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Access } from './app/pages/auth/access';
import { AuthGuard } from '@auth0/auth0-angular';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { 
                path: '', 
                component: HomeComponent,
                canActivate: [AuthGuard]
            },
            { 
                path: 'plano-acao', 
                loadChildren: () => loadRemoteModule('plano-acao', './routes').then((m) => m.appRoutes),
                canActivate: mapToCanActivate([AuthGuard])
            },
            { 
                path: 'cadastros', 
                loadChildren: () => loadRemoteModule('cadastros', './routes').then((m) => m.appRoutes),
                canActivate: mapToCanActivate([AuthGuard])
            }
        ]
    },
    { path: 'login', component: Login },
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'notfound', component: Notfound },
    // { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
