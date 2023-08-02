import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VocabularyRoutingModule } from './vocabulary-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VocabularyRoutingModule
  ]
})
export class VocabularyModule { }
