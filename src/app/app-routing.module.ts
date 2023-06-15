import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {path: 'event', loadChildren: () => import('./pages/event-page/event-page.module').then(m => m.EventPageModule)},
  {path: 'idolgroup', loadChildren: () => import('./pages/idol-page/idol-page.module').then(m => m.IdolPageModule)},
  {path: 'about', loadChildren: () => import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
