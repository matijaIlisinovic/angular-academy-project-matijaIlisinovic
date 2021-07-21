import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
	constructor() {}

	public loginFormGroup: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});
}
