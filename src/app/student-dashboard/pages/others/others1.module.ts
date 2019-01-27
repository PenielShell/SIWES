import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { NgAlertModule } from '@theo4u/ng-alert';



//routess
import {othersRoutes} from "./others1.routes";


//Components

import {OthersComponent1} from "./others1.component";
import { CreateLogbookComponent } from '../../../logbook/create-logbook/create-logbook.component';
import { ListLogbookComponent } from '../../../logbook/list-logbook/list-logbook.component';
import { Month2Component } from './month2/month2.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      NgAlertModule,
      ReactiveFormsModule,
      
      RouterModule.forChild(othersRoutes)
  ],
  declarations: [
      OthersComponent1,
      CreateLogbookComponent,
      ListLogbookComponent,
      Month2Component
  ],
  exports:[
    OthersComponent1
  ],
})
export class OthersModule1 { }
