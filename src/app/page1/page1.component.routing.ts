import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: Page1Component},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class Page1RoutingModule { }