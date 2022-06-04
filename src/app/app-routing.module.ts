import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './antentication/authentication.guard';
import { LoginGuard } from './antentication/login.guard';

//The first Routes position is to define the home page(without any resource)
//for exemple: empty path or blank space in the path will be redirected to home page
//loadChildren: () has LazyLoad behaviour
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'animals',
    loadChildren: () => import('./animals/animals.module').then(m => m.AnimalsModule),
    canLoad: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
