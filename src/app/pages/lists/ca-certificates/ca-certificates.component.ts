import { Component, OnInit } from '@angular/core';
import { CertificateService } from 'src/app/services/certificate.service';
import * as moment from 'moment';

@Component({
  selector: 'app-ca-certificates',
  templateUrl: './ca-certificates.component.html',
  styleUrls: ['./ca-certificates.component.css']
})
export class CACertificatesComponent implements OnInit {

  public listOfData = [];

  constructor(private certificateService: CertificateService) { }

  ngOnInit(): void {
    this.setupData();
  }

  private setupData(): void {
    this.certificateService.getAllValidCACertificates().subscribe(data => {
      this.listOfData = data;
    });
  }

  public revoke(id): void {

  }

  public nameAndSurname(name, surname): String {
    return name + " " + surname;
  }

  public formatDate(date): String {
    return moment(date).format('YYYY/MM/DD');
  }

}
