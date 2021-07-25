import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { AuthentificationService } from './services/authentification.service';

@Injectable({
	providedIn: 'root',
})
export class AppGuard implements CanActivate {
	constructor(private auth: AuthentificationService, private router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.auth.isLoggedIn$.pipe(
			map((isLoggedIn: boolean) => {
				if (isLoggedIn) {
					return isLoggedIn;
				}

				return this.router.parseUrl('/login');
			})
		);
	}
}
