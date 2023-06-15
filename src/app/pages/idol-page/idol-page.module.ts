import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdolPageComponent } from './component/idol-page/idol-page.component';
import { RouterModule, Routes } from '@angular/router';
import { Jkt48PageComponent } from './component/jkt48-page/jkt48-page.component';
import { KohisekaiPageComponent } from './component/kohisekai-page/kohisekai-page.component';
import { MinervaPageComponent } from './component/minerva-page/minerva-page.component';
import { IrisPageComponent } from './component/iris-page/iris-page.component';
import { GochikaraPageComponent } from './component/gochikara-page/gochikara-page.component';
import { SaywonPageComponent } from './component/saywon-page/saywon-page.component';

const routes: Routes = [
  {path: '', component: IdolPageComponent},
  {path: 'jkt48', component: Jkt48PageComponent},
  {path: 'kohisekai', component: KohisekaiPageComponent},
  {path: 'minervaland', component: MinervaPageComponent},
  {path: 'irisidol', component: IrisPageComponent},
  {path: 'gochikara', component: GochikaraPageComponent},
  {path: 'saywon', component: SaywonPageComponent},
  
]

@NgModule({
  declarations: [
    IdolPageComponent,
    Jkt48PageComponent,
    KohisekaiPageComponent,
    MinervaPageComponent,
    IrisPageComponent,
    GochikaraPageComponent,
    SaywonPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IdolPageModule { }
