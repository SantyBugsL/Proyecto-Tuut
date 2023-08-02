import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WritingRoutingModule } from './writing-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    WritingRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class WritingModule { }
