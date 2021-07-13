import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-top-rated-shows-container',
	templateUrl: './top-rated-shows-container.component.html',
	styleUrls: ['./top-rated-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopRatedShowsContainerComponent implements OnInit {
	constructor(private showService: ShowService) {}
	shows: Array<Show>;
	ngOnInit(): void {
		this.shows = this.showService.getTopRated();
	}
}
