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

	private get reviews(): Array<Review> {
		return this.data.map((rData: IReview) => {
			let a = new Review(rData);
			return a;
		});
	}
	public getReviews(id: string | null): Observable<Array<Review>> {
		console.log('catching reviews');
		return of(this.reviews)
			.pipe(delay(Math.random() * 1000 + 1000))
			.pipe(map((reviews) => reviews.filter((review: Review) => review.showId === id)));
	}
	/*public getShows(): Observable<Array<Show>> {
		return of(this.shows).pipe(delay(Math.random() * 1000 + 1000));
	}
	public getTopRated(): Observable<Array<Show>> {
		return this.getShows().pipe(map((shows) => shows.filter((show: Show) => show.averageRating > 4)));
	}
	public getShow(id: string): Observable<Show | null> {
		return this.getShows().pipe(map((shows) => shows.find((show: Show) => show.id === id) || null));
	} */
}
