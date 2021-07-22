import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { geoValidator } from 'src/app/validators/geo-restriction.validator';

export interface RegistrationData {
	email: string;
	password: string;
	password_confirmation: string;
}
@Component({
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
	constructor(private fb: FormBuilder) {}
	@Output() register: EventEmitter<RegistrationData> = new EventEmitter();

	public registrationFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email, geoValidator]],
		password: ['', [Validators.required, Validators.minLength(8)]],
		password_confirmation: ['', [Validators.required, Validators.minLength(8)]],
	});

	private checkPassword(): ValidationErrors | null {
		if (
			this.registrationFormGroup.get('password')?.value ===
			this.registrationFormGroup.get('password_confirmation')?.value
		) {
			return null;
		}
		return { mismatch: 'passwords do not match' };
	}

	public onRegistration(): void {
		this.register.emit(this.registrationFormGroup.value);
		this.registrationFormGroup.reset();
	}
}
