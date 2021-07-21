import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistrationContainerComponent } from './login-registration-container.component';

describe('LoginRegistrationContainerComponent', () => {
  let component: LoginRegistrationContainerComponent;
  let fixture: ComponentFixture<LoginRegistrationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegistrationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistrationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
