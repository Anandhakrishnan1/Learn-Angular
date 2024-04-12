import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },{
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: ':id/:name',
                component: UserComponent
            },    
        ]
    },{
        path: 'servers',
        component: ServersComponent,
        // canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        children: [
            {
                path: ':id/edit',
                component: EditServerComponent,
                canDeactivate: [CanDeactivateGuardService]
            },
            {
                path: ':id',
                component: ServerComponent,
                resolve: {server: ServerResolver}
            }
        ]
    },{
        path: 'not-found',
        component: PageNotFoundComponent
    },
    // {
    //     path: '**',
    //     redirectTo: '/not-found'
    // }
    {
        path: '**',
        component: ErrorPageComponent,
        data: {message: 'Page not found..!'}
    }
];
