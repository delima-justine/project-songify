import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing-page/landing-page').then(m => m.LandingPage)
  },
  {
    path: 'main-page',
    loadComponent: () => import('./main-page/main-page').then(m => m.MainPage)
  }
];
