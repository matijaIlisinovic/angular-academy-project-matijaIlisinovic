import { Injectable } from '@angular/core';
import { IReview } from '../interfaces/review.interface';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewsService {
	private data: Array<IReview> = [
		{
			showId: '1',
			comment: 'good show',
			rating: 4,
		},
		{
			showId: '1',
			comment: 'good show',
			rating: 3,
		},
		{
			showId: '1',
			comment: 'good show',
			rating: 5,
		},
		{
			showId: '2',
			comment: 'good show',
			rating: 3,
		},
		{
			showId: '4',
			comment: 'good show',
			rating: 3,
		},
	];

	public getReviews(id: string): Array<Review> {
		console.log('catching reviews');
		return this.data
			.filter((rData: IReview) => rData.showId === id)
			.map((rData: IReview) => {
				let a = new Review(rData);
				return a;
			});
	}
}
