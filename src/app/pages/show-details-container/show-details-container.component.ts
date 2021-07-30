import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, merge, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, finalize, map, retry, switchMap } from 'rxjs/internal/operators';
import { Review } from 'src/app/services/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

export interface IRawReview {
	comment: string;
	rating: number;
	show_id: string;
}

interface ITemplateData {
	show: Show | null;
	reviews: Array<Review>;
	id: string;
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
	public rating: number;
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
					console.log(reviews);
					return {
						show,
						reviews,
						id,
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

	public onSubmitReview(reviewData: IRawReview) {
		this.reviewService
			.onReviewAdd(reviewData)
			.pipe(
				finalize(() => {
					this.rating = 0;
				})
			)
			.subscribe(() => {
				this.onReviewAdd$.next();
			});
	}
	public onAddRating(newRating: number) {
		this.rating = newRating;
	}
}
