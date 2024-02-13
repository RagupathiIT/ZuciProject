import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinechartComponent } from './linechart/linechart.component';
import { AngularMaterialModule } from './core/material.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MatIconModule } from '@angular/material/icon';
import { AttendanceComponent } from './attendance/attendance.component';
import { TestingComponent } from './testing/testing.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ColleagesComponent } from './colleages/colleages.component';
import { BootstrapModelComponent } from './bootstrap-model/bootstrap-model.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    IndexComponent,
    NavbarComponent,
    LinechartComponent,
    AttendanceComponent,
    TestingComponent,
    ApplyLeaveComponent,
    ColleagesComponent,
    BootstrapModelComponent,
    ReportComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    CanvasJSAngularChartsModule,
    MatIconModule,
    ModalModule.forRoot()
  ],
  providers: [
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
