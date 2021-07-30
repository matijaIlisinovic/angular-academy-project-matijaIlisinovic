import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ILinkData } from 'src/app/interfaces/linkData.interface';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	public links: Array<ILinkData> = [
		{
			url: '',
			title: 'All shows',
		},
		{
			url: '/top-rated',
			title: 'Top rated',
		},
		{
			url: '/my-profile',
			title: 'My profile',
		},
	];
	constructor(private auth: AuthentificationService, private router: Router) {}

	ngOnInit(): void {}
	public logOut(): void {
		this.auth.logOut();
		this.auth.removeEmail();
		this.router.navigate(['/login']);
	}
}
