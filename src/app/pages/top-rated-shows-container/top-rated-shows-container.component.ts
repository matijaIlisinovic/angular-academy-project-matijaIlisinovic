import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-top-rated-shows-container',
	templateUrl: './top-rated-shows-container.component.html',
	styleUrls: ['./top-rated-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopRatedShowsContainerComponent {
	constructor(private showService: ShowService) {}
	private fetchShows(): Observable<Show[]> {
		return this.showService.getTopRated().pipe(
			retry(1),
			catchError((error) => {
				this.errorDisplay = error;
				this.isVisible = 'none';
				return of([]);
			})
		);
	}
	public errorDisplay: string = '';
	public isVisible: string = 'block';
	public shows$: Observable<Array<Show>> = this.fetchShows();
}
