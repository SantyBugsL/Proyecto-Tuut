import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

///
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'principal', redirectTo: 'principal/index', pathMatch: 'full'},
  { path: 'principal/index', component: IndexComponent },
  { path: 'principal/create', component: CreateComponent },
  { path: 'principal/edit/:idPrin', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
