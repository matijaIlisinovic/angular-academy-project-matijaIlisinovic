import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/services/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent implements OnInit {
	constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewsService) {}

	public show: Show | undefined;
	public reviews: Array<Review>;

	ngOnInit(): void {
		const id: string | null = this.route.snapshot.paramMap.get('id');

		if (id) {
			this.show = this.showService.getShow(id);
			this.reviews = this.reviewService.getReviews(id);
		}
	}
}
