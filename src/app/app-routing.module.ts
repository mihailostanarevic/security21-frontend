import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRequestComponent } from './pages/forms/create-request/create-request.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/create-request' },
  { path: 'create-request', component: CreateRequestComponent },
];

@NgModule({
declarations: [],
imports: [
  CommonModule,
  RouterModule.forRoot(routes)
],
exports: [RouterModule]
})
export class AppRoutingModule { }
