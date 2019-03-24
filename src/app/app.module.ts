import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './module/auth/auth.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import {Route, RouterModule} from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import {AngularMaterialModule} from './module/angular-material/angular-material.module';

const routes: Route[] = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', 'component': WelcomeComponent}];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
