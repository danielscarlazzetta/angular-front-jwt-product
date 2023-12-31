import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'dashboard', component: DashboardComponent},
  //{path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  {path: 'crearproduct', component: CrearProductoComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full' },

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule],
})
export class AppRoutingModule { }
