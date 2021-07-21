import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login-registration-container',
  templateUrl: './login-registration-container.component.html',
  styleUrls: ['./login-registration-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginRegistrationContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
