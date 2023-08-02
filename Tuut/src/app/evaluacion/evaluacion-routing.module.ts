import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/////////////////// rutas evaluacion //////////////////////
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'evaluacion', redirectTo: 'evaluacion/index', pathMatch: 'full'},
  { path: 'evaluacion/index', component: IndexComponent },
  { path: 'evaluacion/create', component: CreateComponent },
  { path: 'evaluacion/edit/:idEva', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionRoutingModule { }
