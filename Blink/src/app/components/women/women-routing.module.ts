import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomenJoggersComponent } from './women-joggers/women-joggers.component';
import { WomenMainComponent } from './women-main/women-main.component';
import { WomenTShirtComponent } from './women-t-shirt/women-t-shirt.component';


const womenroutes: Routes = [
  {
    path: '',
    component: WomenMainComponent,
    
    children: [
      { path: '', component: WomenTShirtComponent },
      {path: 'joggers',component:WomenJoggersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(womenroutes)],
  exports: [RouterModule]
})
export class WomenRoutingModule { }
