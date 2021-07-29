import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';
import { IAuthData } from '../interfaces/authData.interface';
import { LoginData } from '../pages/login-container/login-form/login-form.component';
import { RegistrationData } from '../pages/registration-container/registration-form/registration-form.component';
import { StorageService } from './storage.service';

@Injectable({
	providedIn: 'root',
})
export class AuthentificationService {
	private readonly authDataKey = 'authData';
	private email: string;
	private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(Boolean(this.getAuthData()));
	public isLoggedIn$: Observable<boolean> = this._isLoggedIn$.asObservable();

	constructor(private http: HttpClient, private storage: StorageService) {}
	public signIn(data: LoginData): Observable<any> {
		return this.http
			.post<LoginData>('https://tv-shows.infinum.academy/users/sign_in', data, { observe: 'response' })
			.pipe(
				tap((response: HttpResponse<any>) => {
					const uid: string | null = response.headers.get('uid');
					const accessToken: string | null = response.headers.get('access-token');
					const client: string | null = response.headers.get('client');

					if (uid && accessToken && client) {
						this.saveAuthData({ uid, accessToken, client });
						this._isLoggedIn$.next(true);
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

					if (uid && accessToken && client) {
						this.saveAuthData({ uid, accessToken, client });
						this._isLoggedIn$.next(true);
					}
				})
			);
	}

	public getAuthData(): IAuthData | null {
		return this.storage.get(this.authDataKey);
	}
	public logOut(): void {
		this.storage.remove(this.authDataKey);
		this._isLoggedIn$.next(false);
	}
	private saveAuthData(authData: IAuthData): void {
		this.storage.add(this.authDataKey, authData);
	}

	public getEmail(): string {
		return this.email;
	}
	public setEmail(newEmail: string): void {
		this.email = newEmail;
	}
	public removeEmail(): void {
		this.email = '';
	}
}
