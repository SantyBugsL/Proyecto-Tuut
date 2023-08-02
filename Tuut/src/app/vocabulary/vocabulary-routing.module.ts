import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/////////////////// rutas vocabulary //////////////////////
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'vocabulary', redirectTo: 'vocabulary/index', pathMatch: 'full'},
  { path: 'vocabulary/index', component: IndexComponent },
  { path: 'vocabulary/create', component: CreateComponent },
  { path: 'vocabulary/edit/:idVocab', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabularyRoutingModule { }
