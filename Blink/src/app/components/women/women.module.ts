import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenRoutingModule } from './women-routing.module';
import { WomenJoggersComponent } from './women-joggers/women-joggers.component';
import { WomenMainComponent } from './women-main/women-main.component';
import { WomenTShirtComponent } from './women-t-shirt/women-t-shirt.component';


@NgModule({
  declarations: [WomenJoggersComponent, WomenMainComponent, WomenTShirtComponent],
  imports: [
    CommonModule,
    WomenRoutingModule
  ]
})
export class WomenModule { }
