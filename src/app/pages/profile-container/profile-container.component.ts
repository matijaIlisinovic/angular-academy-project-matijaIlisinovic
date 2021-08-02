import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
	selector: 'app-profile-container',
	templateUrl: './profile-container.component.html',
	styleUrls: ['./profile-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileContainerComponent {
	constructor(private auth: AuthentificationService) {}
	public imgUrl$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
	public email: string = this.auth.getEmail();

	public onFileSelected(event: any) {
		const file: File = event.target.files[0];

		if (file) {
			const formData = new FormData();
			formData.append('image', file);

			this.auth.updateUser(formData).subscribe(
				(response) => {
					console.log(response);
					this.imgUrl$.next(response.body.user.image_url);
				},
				(e) => {
					console.log(e);
				}
			);
		}
	}
	public ngOnInit(): void {
		this.auth.getUser().subscribe(
			(response) => {
				console.log(response);
				this.imgUrl$.next(response.user.image_url);
			},
			(e) => {
				console.log(e);
			}
		);
	}
}
