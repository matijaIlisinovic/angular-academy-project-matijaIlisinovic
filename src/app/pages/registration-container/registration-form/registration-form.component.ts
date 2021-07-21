import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
	constructor() {}

	public registrationFormGroup: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
		repassword: new FormControl('', [Validators.required]),
	});
}
