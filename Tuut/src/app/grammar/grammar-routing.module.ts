import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/////////////////// rutas grammar //////////////////////
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'grammar', redirectTo: 'grammar/index', pathMatch: 'full'},
  { path: 'grammar/index', component: IndexComponent },
  { path: 'grammar/create', component: CreateComponent },
  { path: 'grammar/edit/:idGra', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrammarRoutingModule { }
