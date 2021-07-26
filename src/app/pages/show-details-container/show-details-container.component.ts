import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, merge, Observable, of, Subject, throwError } from 'rxjs';
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
	private onReviewAdd$: Subject<void> = new Subject();

	public templateData$: Observable<ITemplateData> = merge(this.route.paramMap, this.onReviewAdd$).pipe(
		map(() => {
			return this.route.snapshot.paramMap.get('id');
		}),
		switchMap((id: string | null) => {
			if (!id) {
				return throwError('no id');
			}

			return combineLatest([this.showService.getShow(id), this.reviewService.getReviews(id)]).pipe(
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

	public onSubmitReview(reviewFormData: ReviewFormData) {
		if (this.id)
			this.reviewService
				.onReviewAdd({
					comment: reviewFormData.comment,
					rating: reviewFormData.rating,
					show_id: +this.id,
				})
				.subscribe(() => {
					this.onReviewAdd$.next();
				});
	}
}
