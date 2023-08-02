import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/////////////////// writing //////////////////////
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'writing', redirectTo: 'writing/index', pathMatch: 'full'},
  { path: 'writing/index', component: IndexComponent },
  { path: 'writing/create', component: CreateComponent },
  { path: 'writing/edit/:idWri', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritingRoutingModule { }
