import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { LoginData } from '../pages/login-container/login-form/login-form.component';
import { RegistrationData } from '../pages/registration-container/registration-form/registration-form.component';

@Injectable({
	providedIn: 'root',
})
export class AuthentificationService {
	constructor(private http: HttpClient) {}
	public signIn(data: LoginData): Observable<LoginData> {
		return this.http.post<LoginData>('https://tv-shows.infinum.academy/users/sign_in', data);
	}
	public register(data: RegistrationData): Observable<RegistrationData> {
		return this.http.post<RegistrationData>('https://tv-shows.infinum.academy/users', data);
	}
}
