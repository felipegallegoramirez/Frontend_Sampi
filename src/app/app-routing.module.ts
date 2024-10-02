import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/general/landing/landing.component';
import { LoginComponent } from './pages/general/login/login.component';
import { Error404Component } from './pages/general/error404/error404.component';
import { ComingSoonComponent } from './pages/general/coming-soon/coming-soon.component';
import { ForgotPasswordComponent } from './pages/general/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'Landing', component: LandingComponent },
  { path: 'Login', component: LoginComponent },
  { path: '', component: Error404Component },
  { path: 'Proximamente', component: ComingSoonComponent },
  { path: 'Recuperar', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
