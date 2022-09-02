import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthResolverService } from '../resolvers/auth-resolver.service';
import { User } from '../users/models/user.model';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //data: {test: {propertyA: 'propertyA', propertyB: 'propertyA'}},
    resolve: [AuthResolverService],
    children: [
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
