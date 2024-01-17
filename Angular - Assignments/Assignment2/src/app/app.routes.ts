import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [{
    path: 'list',
    component: ListComponent,
    title: 'List',
},
{
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details'
},
{
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
},
{
    path: '**',
    component: ErrorComponent,
    title: 'Error'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
