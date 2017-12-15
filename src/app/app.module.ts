import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';

import { AllComponent } from './all/all.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ElectronicsComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'all',component:AllComponent},
      {path:'men',component:MenComponent},
      {path:'women',component:WomenComponent},
      {path:'kids',component:KidsComponent},
      {path:'electronics',component:ElectronicsComponent},
      {path:'sports',component:SportsComponent},
      {path:"",redirectTo:'all',pathMatch:'full'},
      {path:"**",redirectTo:'all',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
