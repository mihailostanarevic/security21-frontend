import { Component, OnInit } from '@angular/core';
import { CertificateRequestService } from 'src/app/services/certificate-request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  public validateForm: FormGroup;
  public certificateType: any = null;
  public extension: any = null;
  public issuer: any = null;
  public isVisible: boolean = false;

  constructor(private crService: CertificateRequestService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.setupForm();
  }

  public setupForm(): void {
    this.validateForm = this.fb.group({
      firstName: [ null, [Validators.required]],
      lastName: [ null, [Validators.required]],
      email: [ null, [Validators.required, Validators.email]],
      country: [ null, [Validators.required]],
      organisation: [ null, [Validators.required]],
      organisationUnit: [ null, [Validators.required]],
      serialNumber: [ null, [Validators.required]]
    });
  }

  public create(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    {
      const body = {
        ...this.validateForm.value,
        extension: this.extension,
        certificateType: this.isVisible,
        issuerEmail: this.issuer
      }
      this.crService.createRequest(body).subscribe(data => {
        console.log(body)
      }) 
    }
  }

  public setupVisibility(): void {
    if(this.certificateType == "certificationAuthority"){
      this.isVisible = true;
    }else{
      this.isVisible = false;
    }
  }

  public login(): void {
    this.router.navigateByUrl('login');
  }
}
