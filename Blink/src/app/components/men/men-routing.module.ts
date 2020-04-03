import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxersComponent } from './boxers/boxers.component';
import { JoggersComponent } from './joggers/joggers.component';
import { MenComponent } from './men/men.component';
import { PyjamasComponent } from './pyjamas/pyjamas.component';


const menroutes: Routes = [
  {
    path: '',
    component: MenComponent,
    
    children: [
      { path: 'boxers', component: BoxersComponent },
      { path: '', component: JoggersComponent },
      { path: 'pyjamas', component: PyjamasComponent }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(menroutes)],
  exports: [RouterModule]
})
export class MenRoutingModule { }

