import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { CACertificatesComponent } from './pages/lists/ca-certificates/ca-certificates.component';
import { EndUserCertificatesComponent } from './pages/lists/end-user-certificates/end-user-certificates.component';
import { RevokedCertificatesComponent } from './pages/lists/revoked-certificates/revoked-certificates.component';
import { CertificateRequestComponent } from './pages/lists/certificate-request/certificate-request.component';
import { ApproveRequestComponent } from './pages/approve-request/approve-request.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'create-request', component: CreateRequestComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'certificate-requests', component: CertificateRequestComponent},
      { path: 'ca-certificates', component: CACertificatesComponent},
      { path: 'end-user-certificates', component: EndUserCertificatesComponent},
      { path: 'revoked-certificates', component: RevokedCertificatesComponent},
      { path: 'approve', component: ApproveRequestComponent}
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
