import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCreateComponent } from './component/car-create/car-create.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { CarListComponent } from './component/car-list/car-list.component';

const  routes: Route[] = [
  {path: 'create', component: CarCreateComponent},
  {path: 'cars', component: CarListComponent}
];

@NgModule({
  declarations: [CarCreateComponent, CarListComponent],
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
