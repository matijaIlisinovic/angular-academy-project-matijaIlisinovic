import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError, finalize } from 'rxjs/internal/operators';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { RegistrationData } from './registration-form/registration-form.component';

@Component({
	selector: 'app-registration-container',
	templateUrl: './registration-container.component.html',
	styleUrls: ['./registration-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationContainerComponent {
	constructor(private auth: AuthentificationService, private router: Router) {}
	public isLoading$: Subject<boolean> = new Subject<boolean>();

	public onRegistration(registrationData: RegistrationData): void {
		this.isLoading$.next(true);
		console.log(
			this.auth
				.register(registrationData)
				.pipe(
					finalize(() => {
						this.isLoading$.next(false);
					}),
					catchError((e) => {
						console.log(e);
						return of('');
					})
				)
				.subscribe((response) => {
					console.log(response);
					this.router.navigate(['']);
				})
		);
	}
}
