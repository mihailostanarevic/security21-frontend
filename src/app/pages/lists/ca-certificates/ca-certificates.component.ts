import { Component, OnInit } from '@angular/core';
import { CertificateService } from 'src/app/services/certificate.service';
import * as moment from 'moment';
import { EndUserCertificateService } from './../../../services/end-user-certificate.service';

@Component({
  selector: 'app-ca-certificates',
  templateUrl: './ca-certificates.component.html',
  styleUrls: ['./ca-certificates.component.css']
})
export class CACertificatesComponent implements OnInit {

  public listOfData = [];

  constructor(private certificateService: CertificateService,
              private endUserCertificateService: EndUserCertificateService) { }

  ngOnInit(): void {
    this.setupData();
  }

  private setupData(): void {
    this.certificateService.getAllValidCACertificates().subscribe(data => {
      this.listOfData = data;
    });
  }

  public revoke(email): void {
    const body = {
      "email" : email
    }
    this.endUserCertificateService.revokeCertificate(body).subscribe();

  }

  public download(email): void {
    const body = {
      "email" : email
    }
    this.certificateService.downloadCertificate(body).subscribe();

  }

  public nameAndSurname(name, surname): String {
    return name + " " + surname;
  }

  public formatDate(date): String {
    return moment(date).format('YYYY/MM/DD');
  }

}
