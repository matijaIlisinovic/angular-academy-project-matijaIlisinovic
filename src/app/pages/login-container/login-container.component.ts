import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginData } from './login-form/login-form.component';

@Component({
	selector: 'app-login-container',
	templateUrl: './login-container.component.html',
	styleUrls: ['./login-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
	public onLogin(loginData: LoginData): void {
		console.log(loginData);
	}
}
