import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: Page2Component},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class Page2RoutingModule { }