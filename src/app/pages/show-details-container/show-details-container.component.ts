import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, from, Observable, of } from 'rxjs';
import { catchError, map, retry, switchMap } from 'rxjs/internal/operators';
import { Review } from 'src/app/services/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

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
export class ShowDetailsContainerComponent implements OnInit {
	public isVisible: string = 'block';
	constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewsService) {}
	public show$: Observable<Show | null> = this.fetchShowFn();
	public reviews$: Observable<Array<Review>> = this.fetchReviewsFn();
	public errorDisplay: string = '';
	public templateData$: Observable<ITemplateData> = combineLatest([this.show$, this.reviews$]).pipe(
		map(([show, reviews]) => {
			return {
				show: show,
				reviews: reviews,
			};
		}),
		retry(1),
		catchError((error) => {
			this.isVisible = 'none';
			this.errorDisplay = error;
			return of(error);
		})
	);

	ngOnInit(): void {}

	private fetchShowFn(): Observable<Show | null> {
		return this.route.paramMap.pipe(
			switchMap((paramMap) => {
				const id: string | null = paramMap.get('id');
				if (id) {
					return this.showService.getShow(id);
				}
				console.log('no id');
				return of(null);
			})
		);
	}
	private fetchReviewsFn(): Observable<Array<Review>> {
		return this.route.paramMap.pipe(
			switchMap((paramMap) => {
				const id: string | null = paramMap.get('id');
				if (id) return this.reviewService.getReviews(id);
				console.log('no id');
				return of([]);
			})
		);
	}
}
