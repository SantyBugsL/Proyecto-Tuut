import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/////////////////// vista listening //////////////////////
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'listening', redirectTo: 'listening/index', pathMatch: 'full'},
  { path: 'listening/index', component: IndexComponent },
  { path: 'listening/create', component: CreateComponent },
  { path: 'listening/edit/:idList', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeningRoutingModule { }
