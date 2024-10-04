import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/general/landing/landing.component';
import { LoginComponent } from './pages/general/login/login.component';
import { Error404Component } from './pages/general/error404/error404.component';
import { ComingSoonComponent } from './pages/general/coming-soon/coming-soon.component';
import { ForgotPasswordComponent } from './pages/general/forgot-password/forgot-password.component';
import { ToolkitComponent } from './pages/general/toolkit/toolkit.component';
import { RiskToolkitComponent } from './pages/risk/risk-toolkit/risk-toolkit.component';
import { RiskComponent } from './pages/risk/risk/risk.component';

const routes: Routes = [
  { path: 'Landing', component: LandingComponent },
  { path: 'Login', component: LoginComponent },
  { path: '', component: Error404Component },
  { path: 'Proximamente', component: ComingSoonComponent },
  { path: 'Recuperar', component: ForgotPasswordComponent },
  { path: 'Central', component: ToolkitComponent },
  { path: 'Central-Riesgos', component: RiskToolkitComponent },
  { path: 'Riesgos', component: RiskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
