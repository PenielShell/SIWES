// built-in
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgAlertModule } from '@theo4u/ng-alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';


// components
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SignUpComponent } from './student/sign-up/sign-up.component';
import { SignUp1Component } from './institution/staff/sign-up1/sign-up1.component';



//routes
import { appRoutes } from './routes';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { SignInComponent } from './student/sign-in/sign-in.component';
import { StudentService } from './shared/student.service';
import { StaffDashboardComponent } from './institution/staff-dashboard/staff-dashboard.component';
import { SignIn1Component } from './institution/staff/sign-in1/sign-in1.component';
import { StaffService } from './institution/shared/staff.service';
import { FormaService } from './shared2/forma.service';
import { FormbService } from './shared3/formb.service';
import { LogbookService } from '././logbook/services/logbook.service';
import { PusherService } from '././logbook/services/pusher.service';


//other
import { AuthGuard } from './auth/auth.guard';
import { AuthGuard1 } from './institution/auth/auth.guard1';
import { AuthInterceptor1 } from './institution/auth/auth.interceptor1';
import { AuthInterceptor } from './auth/auth.interceptor';
import { StaffComponent } from './institution/staff/staff.component';
import {Topnavbar} from "./institution/staff-dashboard/components/topnavbar/topnavbar.component";
import {Navigation} from "./institution/staff-dashboard/components/navigation/navigation.component";
import {HomeComponent} from "./institution/staff-dashboard/pages/home/home.component";
import {Topnavbar1} from "./student-dashboard/components/topnavbar1/topnavbar1.component";
import {Navigation1} from "./student-dashboard/components/navigation1/navigation1.component";
import {Home1Component} from "./student-dashboard/pages/home1/home1.component";
import { ReportComponent } from './student-dashboard/pages/report/report.component';
import { EvaluateComponent } from './student-dashboard/pages/evaluate/evaluate.component';
import { FormaComponent } from './forma/forma.component';
import { ButtonAComponent } from './student-dashboard/buttons/button-a/button-a.component';
import { ButtonBComponent } from './student-dashboard/buttons/button-b/button-b.component';
import { FormbComponent } from './formb/formb.component';
import { StudentEvaluateComponent } from './student-evaluate/student-evaluate.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SignUpComponent,
    StudentDashboardComponent,
    SignInComponent,
    StaffComponent,
    SignUp1Component,
    StaffDashboardComponent,
    SignIn1Component,
    Topnavbar,
    Navigation,
    HomeComponent,
    Topnavbar1,
    Navigation1,
    Home1Component,
    ReportComponent,
    EvaluateComponent,
    FormaComponent,
    ButtonAComponent,
    ButtonBComponent,
    FormbComponent,
    StudentEvaluateComponent,
   
    
  ],
  imports: [
    BrowserModule,
    NgAlertModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FileUploadModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
 
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,AuthGuard1,StudentService,StaffService,FormaService,FormbService,LogbookService,PusherService],

  bootstrap: [AppComponent]
})
export class AppModule { }
