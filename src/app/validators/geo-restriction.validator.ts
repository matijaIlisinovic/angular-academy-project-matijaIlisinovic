import { FormControl, ValidationErrors } from '@angular/forms';

export function geoValidator(control: FormControl): ValidationErrors | null {
	const restrictedDomains: Array<string> = ['.cn', '.cd', '.il'];
	const enteredValue: string = control.value || '';
	for (let i = 0; i < restrictedDomains.length; i++) {
		if (enteredValue.endsWith(restrictedDomains[i])) {
			return { availability: 'This content is not available' };
		}
	}
	return null;
}
