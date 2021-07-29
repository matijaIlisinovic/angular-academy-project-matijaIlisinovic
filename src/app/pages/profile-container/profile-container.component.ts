import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthErrorInterceptor } from 'src/app/interceptors/auth-error.interceptor';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
	selector: 'app-profile-container',
	templateUrl: './profile-container.component.html',
	styleUrls: ['./profile-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileContainerComponent {
	constructor(private auth: AuthentificationService) {}

	public email: string = this.auth.getEmail();
}
