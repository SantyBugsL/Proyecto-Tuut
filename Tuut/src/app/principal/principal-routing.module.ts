import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/////////////////// vista principal //////////////////////
import { IndexComponent } from './index/index.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'principal', redirectTo: 'principal/index', pathMatch: 'full'},
  { path: 'principal/index', component: IndexComponent },
  { path: 'principal/index2', component: Index2Component },
  { path: 'principal/index3', component: Index3Component },
  { path: 'principal/create', component: CreateComponent },
  { path: 'principal/edit/:idPrin', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
