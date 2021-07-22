import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkPasswords(group: AbstractControl): ValidationErrors | null {
	let pass = group.get('password')?.value;
	let confirmPass = group.get('password_confirmation')?.value;
	return pass === confirmPass ? null : { notSame: true };
}
