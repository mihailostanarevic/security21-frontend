import { Component, OnInit } from '@angular/core';
import { RevokedCertificateService} from './../../../services/revoked-certificate.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';


@Component({
  selector: 'app-revoked-certificates',
  templateUrl: './revoked-certificates.component.html',
  styleUrls: ['./revoked-certificates.component.css']
})
export class RevokedCertificatesComponent implements OnInit {

  public listOfData = [];

  constructor(private revokedCertificateService: RevokedCertificateService, private message: NzMessageService, private router: Router) { }

  ngOnInit(): void {
    this.setupData();
  }

  private setupData(): void {
    this.revokedCertificateService.getAllRevokeCertificates().subscribe(data => {
      this.listOfData = data;
    }, error => {
      this.message.info(error.error.message);
      this.router.navigateByUrl('dashboard');
    });
  }



}
