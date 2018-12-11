import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { InstitutionComponent } from './institution/institution.component';
import { LoginComponent } from './login/login.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';



const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: PageHeaderComponent },
  { path: 'student', component: SidebarComponent },
  ];
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    InstitutionComponent,
    LoginComponent,
    PageHeaderComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
