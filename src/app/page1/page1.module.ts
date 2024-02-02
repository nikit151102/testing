import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1RoutingModule } from './page1.component.routing';
import { Page1Component } from './page1.component';

@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    Page1RoutingModule
  ],
  exports:[
    Page1Component
  ]
})
export class Page1Module { }
