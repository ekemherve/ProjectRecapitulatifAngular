import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './component/user-list/user-list.component';
import {Route, RouterModule} from '@angular/router';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const  routes: Route[] = [
  {path: 'users', component: UserListComponent},
];

@NgModule({
  declarations: [UserListComponent],
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
export class UserModule { }
