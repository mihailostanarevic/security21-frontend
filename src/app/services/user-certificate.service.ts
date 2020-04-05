import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCertificateService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  public createRequest(body): Observable<any> {
    return this.http.post(`${this.baseUrl}user-certificate`, body);
  }
}
