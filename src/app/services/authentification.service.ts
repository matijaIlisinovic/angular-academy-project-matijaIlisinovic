import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';
import { IAuthData } from '../interfaces/authData.interface';
import { LoginData } from '../pages/login-container/login-form/login-form.component';
import { RegistrationData } from '../pages/registration-container/registration-form/registration-form.component';
import { StorageService } from './storage.service';

@Injectable({
	providedIn: 'root',
})
export class AuthentificationService {
	private readonly authDataKey = 'authData';
	constructor(private http: HttpClient, private storage: StorageService) {}
	public signIn(data: LoginData): Observable<any> {
		return this.http
			.post<LoginData>('https://tv-shows.infinum.academy/users/sign_in', data, { observe: 'response' })
			.pipe(
				tap((response: HttpResponse<any>) => {
					const uid: string | null = response.headers.get('uid');
					const accessToken: string | null = response.headers.get('access-token');
					const client: string | null = response.headers.get('client');

					console.log(uid, accessToken, client);

					if (uid && accessToken && client) {
						this.saveAuthData({ uid, accessToken, client });
					}
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

					if (uid && accessToken && client) {
						this.saveAuthData({ uid, accessToken, client });
					}
				})
			);
	}

	public getAuthData(): IAuthData | null {
		return this.storage.get(this.authDataKey);
	}
	private saveAuthData(authData: IAuthData): void {
		this.storage.add(this.authDataKey, authData);
	}
}
