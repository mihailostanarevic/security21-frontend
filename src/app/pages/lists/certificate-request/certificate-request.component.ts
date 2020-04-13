import { Component, OnInit } from '@angular/core';
import { ListOfRequestsService } from './../../../services/list-of-requests.service';
import * as moment from 'moment';

@Component({
  selector: 'app-certificate-request',
  templateUrl: './certificate-request.component.html',
  styleUrls: ['./certificate-request.component.css']
})
export class CertificateRequestComponent implements OnInit {
  public listOfData = [];

  constructor(private listOfRequestsService: ListOfRequestsService) { }

  ngOnInit(): void {
    this.setupData();
  }

  private setupData(): void {
    this.listOfRequestsService.getAllRequests().subscribe(data => {
      this.listOfData = data;
      console.log(data);
    });
  }

  public approve(data): void {
    // approve stranica
  }

  public deny(id): void {
    const body = {
      "uuid" : id
    }
    this.listOfRequestsService.denyRequest(body).subscribe();
    alert('Successfully denied!');
  }

  public nameAndSurname(name, surname): String {
    return name + " " + surname;
  }

  public formatDate(date): String {
    return moment(date).format('YYYY/MM/DD');
  }

}
