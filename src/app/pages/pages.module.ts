import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { EventPageModule } from './event-page/event-page.module';
import { IdolPageModule } from './idol-page/idol-page.module';
import { AboutPageModule } from './about-page/about-page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomePageModule,
    EventPageModule,
    IdolPageModule,
    AboutPageModule
  ],
  exports: [
    HomePageModule,
    EventPageModule,
    IdolPageModule,
    AboutPageModule
  ]
})
export class PagesModule { }
