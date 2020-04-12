import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidCertificatesComponent } from './valid-certificates.component';

describe('ValidCertificatesComponent', () => {
  let component: ValidCertificatesComponent;
  let fixture: ComponentFixture<ValidCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
