import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { RiskFormComponent } from './components/risk/risk-form/risk-form.component';
import { RiskFactorsFormComponent } from './components/risk/risk-factors-form/risk-factors-form.component';
import { RiskGeneralFactorsFormComponent } from './components/risk/risk-general-factors-form/risk-general-factors-form.component';
import { ControlsComponent } from './pages/risk/controls/controls.component';
import { RiskMatrixComponent } from './pages/risk/risk-matrix/risk-matrix.component';
import { ControlsFormComponent } from './components/risk/controls-form/controls-form.component';
import { ExpertMethodologyFormComponent } from './components/risk/expert-methodology-form/expert-methodology-form.component';
import { CompanyToolkitComponent } from './pages/company/company-toolkit/company-toolkit.component';
import { CompanyComponent } from './pages/company/company/company.component';
import { CompanyFormComponent } from './components/company/company-form/company-form.component';

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
    RiskComponent,
    RiskFormComponent,
    RiskFactorsFormComponent,
    RiskGeneralFactorsFormComponent,
    ControlsComponent,
    RiskMatrixComponent,
    ControlsFormComponent,
    ExpertMethodologyFormComponent,
    CompanyToolkitComponent,
    CompanyComponent,
    CompanyFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
