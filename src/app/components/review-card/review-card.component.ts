import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { finalize } from 'rxjs/internal/operators';
import { IReview } from 'src/app/interfaces/review.interface';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Review } from 'src/app/services/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
	selector: 'app-review-card',
	templateUrl: './review-card.component.html',
	styleUrls: ['./review-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
	constructor(private auth: AuthentificationService, private reviewService: ReviewsService) {}
	@Input() review: Review;
	public email: string = this.auth.getEmail();
	public delete(review: Review) {
		const id = review.id;
		console.log(review);
		this.reviewService
			.deleteReview(id)
			.pipe(
				finalize(() => {
					window.location.reload();
				})
			)
			.subscribe();
	}
}
