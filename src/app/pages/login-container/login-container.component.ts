import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { of, Subject, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/internal/operators';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { LoginData } from './login-form/login-form.component';

@Component({
	selector: 'app-login-container',
	templateUrl: './login-container.component.html',
	styleUrls: ['./login-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
	constructor(private auth: AuthentificationService, private router: Router, private snack: MatSnackBar) {}
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
					this.snack.open('invalid password', 'ok');
					return throwError(e);
				})
			)
			.subscribe((response) => {
				console.log(response);
				this.auth.setEmail(response.body.user.email);

				this.router.navigate(['']);
			});
	}
}
