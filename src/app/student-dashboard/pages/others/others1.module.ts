import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {OthersComponent1} from "./others1.component";
import {othersRoutes} from "./others1.routes";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(othersRoutes)
  ],
  declarations: [
      OthersComponent1
  ],
})
export class OthersModule1 { }
