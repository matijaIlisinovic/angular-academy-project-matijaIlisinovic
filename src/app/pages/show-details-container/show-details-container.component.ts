import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, finalize, map, retry, switchMap } from 'rxjs/internal/operators';
import { IReview } from 'src/app/interfaces/review.interface';
import { Review } from 'src/app/services/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';
import { ReviewFormData } from './review-form/review-form.component';

export interface IRawReview {
	comment: string;
	rating: number;
	show_id: number;
}

interface ITemplateData {
	show: Show | null;
	reviews: Array<Review>;
}

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent {
	public isVisible: string = 'block';
	constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewsService) {}
	public errorDisplay: string = '';
	private id: string | null = this.route.snapshot.paramMap.get('id');

	public templateData$: Observable<ITemplateData> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');
			return combineLatest([this.fetchShowFn(id), this.reviewService.getReviews(id)]).pipe(
				map(([show, reviews]) => {
					return {
						show,
						reviews,
					};
				}),
				retry(1),
				catchError((error) => {
					this.isVisible = 'none';
					this.errorDisplay = error;
					return of(error);
				})
			);
		})
	);

	private fetchShowFn(id: string | null): Observable<Show | null> {
		if (id) {
			return this.showService.getShow(id);
		} else {
			return of(null);
		}
	}
	public onSubmitReview(reviewFormData: ReviewFormData) {
		if (this.id)
			this.reviewService
				.onReviewAdd({
					comment: reviewFormData.comment,
					rating: reviewFormData.rating,
					show_id: +this.id,
				})
				.pipe(
					finalize(() => {
						window.location.reload();
					})
				)
				.subscribe();
	}
}
