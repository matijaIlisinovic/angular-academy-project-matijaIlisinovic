import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError, finalize } from 'rxjs/internal/operators';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { LoginData } from './login-form/login-form.component';

@Component({
	selector: 'app-login-container',
	templateUrl: './login-container.component.html',
	styleUrls: ['./login-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
	constructor(private auth: AuthentificationService, private router: Router) {}
	public isLoading$: Subject<boolean> = new Subject<boolean>();

	public onLogin(loginData: LoginData): void {
		this.isLoading$.next(true);
		this.auth
			.signIn(loginData)
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
			});
	}
}
