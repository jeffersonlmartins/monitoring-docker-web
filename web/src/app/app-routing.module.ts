import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/edit/edit.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
