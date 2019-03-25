import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCreateComponent } from './component/car-create/car-create.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';

const  routes: Route[] = [
  {path: 'create', component: CarCreateComponent}
  // {path: 'all', component: CarListComponent}
];

@NgModule({
  declarations: [CarCreateComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class CarModule { }
