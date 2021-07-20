import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/app/services/review.model';

@Component({
	selector: 'app-review-card',
	templateUrl: './review-card.component.html',
	styleUrls: ['./review-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
	@Input() review: Review;
}
