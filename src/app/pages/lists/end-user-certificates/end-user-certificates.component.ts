import { Component, OnInit } from '@angular/core';
import { EndUserCertificateService } from './../../../services/end-user-certificate.service';
import * as moment from 'moment';
import { CertificateService } from './../../../services/certificate.service';

@Component({
  selector: 'app-end-user-certificates',
  templateUrl: './end-user-certificates.component.html',
  styleUrls: ['./end-user-certificates.component.css']
})
export class EndUserCertificatesComponent implements OnInit {
  public listOfData = [];

  constructor(private endUserCertificateService: EndUserCertificateService, private certificateService: CertificateService) { }

  ngOnInit(): void {
    this.setupData();
  }

  private setupData(): void {
    this.endUserCertificateService.getAllValidEndUserCertificates().subscribe(data => {
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
    this.certificateService.downloadCertificate(body).subscribe(data => {
      console.log(data);
    })
  }
  /*
  this.downloadFile(data)),
    error => console.log('Error downloading the file.'),
    () => console.info('OK');*/ 


  /*downloadFile(data: any) {
    const blob = new Blob([data], { type: 'text/plain' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }*/

  public nameAndSurname(name, surname): String {
    return name + " " + surname;
  }

  public formatDate(date): String {
    return moment(date).format('YYYY/MM/DD');
  }

}
