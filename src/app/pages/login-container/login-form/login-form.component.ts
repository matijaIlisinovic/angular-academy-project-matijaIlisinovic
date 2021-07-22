import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
	constructor(private fb: FormBuilder) {}
	@Output() logIn: EventEmitter<LoginData> = new EventEmitter();

	public loginFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email, geoValidator]],
		password: ['', [Validators.required, Validators.minLength(8)]],
	});

	public onLogin(): void {
		this.logIn.emit(this.loginFormGroup.value);
		this.loginFormGroup.reset();
	}
}
