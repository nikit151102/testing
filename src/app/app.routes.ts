import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then(e => e.Page1Module)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then(e => e.Page2Module)
  }
];
