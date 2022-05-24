import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

//Here in HomeRoutingComponent, the first Component is HomeComponent, it's the base
//because this is a behaviour from HomeRoutingModule point of view.
//Actually the URL will be http://localhost:4200/home . That's why, from here, the first children has an empty path
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
