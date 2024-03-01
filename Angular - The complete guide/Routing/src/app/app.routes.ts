import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';

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
                component: EditServerComponent
            },
            {
                path: ':id',
                component: ServerComponent
            }
        ]
    },{
        path: 'not-found',
        component: PageNotFoundComponent
    },{
        path: '**',
        redirectTo: '/not-found'
    }
];
