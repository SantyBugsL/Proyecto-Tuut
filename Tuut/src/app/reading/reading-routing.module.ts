import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/////////////////// rutas reading //////////////////////
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'reading', redirectTo: 'reading/index', pathMatch: 'full'},
  { path: 'reading/index', component: IndexComponent },
  { path: 'reading/create', component: CreateComponent },
  { path: 'reading/edit/:idRea', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadingRoutingModule { }
