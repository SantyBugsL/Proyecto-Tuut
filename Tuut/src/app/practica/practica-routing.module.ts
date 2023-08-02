import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/////////////////// rutas practica //////////////////////
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'practica', redirectTo: 'practica/index', pathMatch: 'full'},
  { path: 'practica/index', component: IndexComponent },
  { path: 'practica/create', component: CreateComponent },
  { path: 'practica/edit/:idPra', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticaRoutingModule { }
