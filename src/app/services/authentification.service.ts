import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';
import { IAuthData } from '../interfaces/authData.interface';
import { LoginData } from '../pages/login-container/login-form/login-form.component';
import { RegistrationData } from '../pages/registration-container/registration-form/registration-form.component';

@Injectable({
	providedIn: 'root',
})
export class AuthentificationService {
	constructor(private http: HttpClient) {}
	public signIn(data: LoginData): Observable<any> {
		return this.http
			.post<LoginData>('https://tv-shows.infinum.academy/users/sign_in', data, { observe: 'response' })
			.pipe(
				tap((response: HttpResponse<any>) => {
					const uid: string | null = response.headers.get('uid');
					const accessToken: string | null = response.headers.get('access-token');
					const client: string | null = response.headers.get('client');

					console.log(uid, accessToken, client);
				})
			);
	}
	public register(data: RegistrationData): Observable<any> {
		return this.http
			.post<RegistrationData>('https://tv-shows.infinum.academy/users', data, { observe: 'response' })
			.pipe(
				tap((response: HttpResponse<any>) => {
					const uid: string | null = response.headers.get('uid');
					const accessToken: string | null = response.headers.get('access-token');
					const client: string | null = response.headers.get('client');

					console.log(uid, accessToken, client);
				})
			);
	}

	private saveAuthData(authData: IAuthData): void {}
}
