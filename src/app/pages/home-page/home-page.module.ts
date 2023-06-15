import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './component/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { KamusngidolComponent } from './component/kamusngidol/kamusngidol.component';
import { SenlistPageComponent } from './component/senlist-page/senlist-page.component';

const routes : Routes = [
  {path: '', component: HomePageComponent},
  {path: 'kamusngidol', component: KamusngidolComponent},
  {path: 'senlist', component: SenlistPageComponent}
]

@NgModule({
  declarations: [
    HomePageComponent,
    KamusngidolComponent,
    SenlistPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
