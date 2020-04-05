import { Component, OnInit } from '@angular/core';
import { UserCertificateService } from 'src/app/services/user-certificate.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  validateForm: FormGroup;
  currentDate: any;

  constructor(private ucService: UserCertificateService, private fb: FormBuilder) { }

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
      organisationUnit: [ null, [Validators.required]]
    });
  }

  create(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    {
      this.currentDate = new Date();
      const body = {
        ...this.validateForm.value,
        date: this.currentDate
      }
      this.ucService.createRequest(body).subscribe(data => {
        console.log(body)
      }) 
    }
  }

}
