import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private auth: AuthentificationService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const authData = this.auth.getAuthData();
		let finalRequest: HttpRequest<unknown> = request;

		if (authData) {
			finalRequest = request.clone({
				headers: new HttpHeaders({
					client: authData.client,
					'access-token': authData.accessToken,
					uid: authData.uid,
				}),
			});
		}

		return next.handle(finalRequest);
	}
}
