import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent {
	constructor(private showService: ShowService) {}
	public shows: Array<Show>;

	ngOnInit() {
		this.shows = this.showService.getShows();
	}
}
