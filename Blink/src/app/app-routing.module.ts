import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent
  },
  {
    path: 'men',
    loadChildren: () => import('./components/men/men.module').then(m => m.MenModule),
    data: { preload: true }
  },
  {
    path: 'women',
    loadChildren: () => import('./components/women/women.module').then(m => m.WomenModule),
    data: { preload: true }
  },
  {
    path: 'about',
    component : AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
