import { Component, OnInit } from '@angular/core';
import { RevokedCertificateService} from './../../../services/revoked-certificate.service';


@Component({
  selector: 'app-revoked-certificates',
  templateUrl: './revoked-certificates.component.html',
  styleUrls: ['./revoked-certificates.component.css']
})
export class RevokedCertificatesComponent implements OnInit {

  public listOfData = [];

  constructor(private revokedCertificateService: RevokedCertificateService) { }

  ngOnInit(): void {
    this.setupData();
  }

  private setupData(): void {
    this.revokedCertificateService.getAllRevokeCertificates().subscribe(data => {
      this.listOfData = data;
    });
  }



}
