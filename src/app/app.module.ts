import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/general/landing/landing.component';
import { LoginComponent } from './pages/general/login/login.component';
import { Error404Component } from './pages/general/error404/error404.component';
import { ComingSoonComponent } from './pages/general/coming-soon/coming-soon.component';
import { ForgotPasswordComponent } from './pages/general/forgot-password/forgot-password.component';
import { ToolkitComponent } from './pages/general/toolkit/toolkit.component';
import { RiskToolkitComponent } from './pages/risk/risk-toolkit/risk-toolkit.component';
import { RiskComponent } from './pages/risk/risk/risk.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    Error404Component,
    ComingSoonComponent,
    ForgotPasswordComponent,
    ToolkitComponent,
    RiskToolkitComponent,
    RiskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
