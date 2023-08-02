import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/////////////////// rutas speaking //////////////////////
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'speaking', redirectTo: 'speaking/index', pathMatch: 'full'},
  { path: 'speaking/index', component: IndexComponent },
  { path: 'speaking/create', component: CreateComponent },
  { path: 'speaking/edit/:idSpea', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakingRoutingModule { }
