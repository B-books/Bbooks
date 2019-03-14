import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Component } from './mod1/tab1.component';
import { Tab2Component } from './mod1/tab2.component';
import { Tab3Component } from './mod1/tab3.component';
import { Tab4Component } from './mod1/tab4.component';



const routes: Routes = [
  {path:'tab1', component:  Tab1Component },
  {path:'tab2', component:  Tab2Component },
  {path:'tab3', component:  Tab3Component },
  {path:'tab4', component:  Tab4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[Tab1Component,Tab2Component,Tab3Component,Tab4Component]