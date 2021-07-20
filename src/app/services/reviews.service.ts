import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/internal/operators';
import { IReview } from '../interfaces/review.interface';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewsService {
	private data: Array<IReview> = [
		{
			showId: '1',
			id: '1',
			comment: 'good show',
			rating: 4,
		},
		{
			showId: '1',
			id: '2',
			comment: 'good show',
			rating: 3,
		},
		{
			showId: '1',
			id: '3',
			comment: 'good show',
			rating: 5,
		},
		{
			showId: '2',
			id: '4',
			comment: 'good show',
			rating: 3,
		},
		{
			showId: '4',
			id: '5',
			comment: 'good show',
			rating: 3,
		},
	];

	private get reviews(): Array<Review> {
		if (Math.random() < 0.1) {
			throw 'Unable to fetch reviews';
		}
		return this.data.map((rData: IReview) => {
			return new Review(rData);
		});
	}
	public getReviews(id: string | null): Observable<Array<Review>> {
		console.log('catching reviews');
		return of(this.reviews)
			.pipe(delay(Math.random() * 1000 + 1000))
			.pipe(
				map((reviews) => {
					return reviews.filter((review: Review) => {
						return review.showId === id;
					});
				})
			);
	}
}
