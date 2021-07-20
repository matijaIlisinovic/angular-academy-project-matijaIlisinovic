import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent {
	private fetchShows(): Observable<Show[]> {
		return this.showService.getShows().pipe(
			retry(1),
			catchError((error) => {
				this.errorDisplay = error;
				this.isVisible = 'none';
				return of([]);
			})
		);
	}
	public errorDisplay: string;
	public isVisible: string = 'block';
	constructor(private showService: ShowService) {}

	public shows$: Observable<Array<Show>> = this.fetchShows();
}
