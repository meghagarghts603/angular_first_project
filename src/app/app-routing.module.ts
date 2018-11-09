import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
 import {UsersComponent} from './users/users.component';

import { from } from 'rxjs';
const routes :Routes = [
  {
    path : ' ',
    component : UsersComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
