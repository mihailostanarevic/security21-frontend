import { Component, OnInit } from '@angular/core';
import { EndUserCertificateService } from './../../../services/end-user-certificate.service';
import * as moment from 'moment';

@Component({
  selector: 'app-end-user-certificates',
  templateUrl: './end-user-certificates.component.html',
  styleUrls: ['./end-user-certificates.component.css']
})
export class EndUserCertificatesComponent implements OnInit {
  public listOfData = [];

  constructor(private endUserCertificateService: EndUserCertificateService) { }

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

  public nameAndSurname(name, surname): String {
    return name + " " + surname;
  }

  public formatDate(date): String {
    return moment(date).format('YYYY/MM/DD');
  }

}
