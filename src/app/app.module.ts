// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
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


//other
import { AuthGuard } from './auth/auth.guard';
import { AuthGuard1 } from './institution/auth/auth.guard1';
import { AuthInterceptor1 } from './institution/auth/auth.interceptor1';
import { AuthInterceptor } from './auth/auth.interceptor';
import { StaffComponent } from './institution/staff/staff.component';


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
    SignIn1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,AuthGuard1,StudentService,StaffService],

  bootstrap: [AppComponent]
})
export class AppModule { }
