import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { geoValidator } from 'src/app/validators/geo-restriction.validator';

export interface LoginData {
	email: string;
	password: string;
}

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
	constructor() {}
	@Output() logIn: EventEmitter<LoginData> = new EventEmitter();

	public loginFormGroup: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email, geoValidator]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
	});

	public onLogin(): void {
		this.logIn.emit(this.loginFormGroup.value);
		this.loginFormGroup.reset();
	}
}
