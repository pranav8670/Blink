import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenRoutingModule } from './men-routing.module';
import { BoxersComponent } from './boxers/boxers.component';
import { JoggersComponent } from './joggers/joggers.component';
import { MenComponent } from './men/men.component';
import { PyjamasComponent } from './pyjamas/pyjamas.component';


@NgModule({
  declarations: [BoxersComponent, JoggersComponent, MenComponent, PyjamasComponent],
  imports: [
    CommonModule,
    MenRoutingModule
  ]
})
export class MenModule { }
