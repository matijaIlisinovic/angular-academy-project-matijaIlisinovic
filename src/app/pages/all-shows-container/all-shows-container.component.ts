import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent {
	fetchShows(): Observable<Show[]> {
		try {
			return this.showService.getShows();
		} catch (error) {
			this.errorDisplay = error;
			this.isVisible = 'none';
			return of([]);
		}
	}
	public errorDisplay: string;
	public isVisible: string = 'block';
	constructor(private showService: ShowService) {}

	public shows$: Observable<Array<Show>> = this.fetchShows();
}
