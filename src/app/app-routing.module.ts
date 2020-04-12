import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { CACertificatesComponent } from './pages/lists/ca-certificates/ca-certificates.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/create-request' },
  { path: 'create-request', component: CreateRequestComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'ca-certificates', component: CACertificatesComponent}
    ]
  }
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
