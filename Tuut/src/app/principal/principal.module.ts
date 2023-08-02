import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent, Index2Component, Index3Component],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PrincipalModule { }
